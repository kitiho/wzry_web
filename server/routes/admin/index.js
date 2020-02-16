module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    const jwt = require('jsonwebtoken')
    const User = require('../../models/User')
    const assert = require('http-assert')
    const authMiddleWare = require('../../midlleware/auth')
    const modelMiddleWare = require('../../midlleware/model')

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.get('/', async (req, res) => {
        let model = {}
        if (req.Model.modelName === 'Category') {
            model = await req.Model.find().populate('parent')
        } else {
            model = await req.Model.find()
        }
        res.send(model)
    })
    router.delete('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send(model)
    })
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    const multer = require('multer')({
        dest: __dirname + '../../../uploads'
    })
    app.post('/admin/api/uploads',authMiddleWare(), multer.single('file'),async (req, res) => {
        const file = req.file
        file.src = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        const user = await User.findOne({ username }).select('+password')
        assert(user, 401, '用户不存在')
        const isPasswordCorrect = require('bcrypt').compareSync(password, user.password)
        assert(isPasswordCorrect, 401, '密码错误')
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send(token)
    })



    app.use('/admin/api/:resource', authMiddleWare(), modelMiddleWare(), router)

    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })

}