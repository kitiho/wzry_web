module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })

    

    router.post('/',async (req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id',async (req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.get('/',async (req,res)=>{
        let model = {}
        if(req.Model.modelName === 'Category'){
            model = await req.Model.find().populate('parent')
        }else{
            model = await req.Model.find()
        }
        res.send(model)
    })
    router.delete('/:id',async (req,res)=>{
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send(model)
    })
    router.get('/:id',async (req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    const multer = require('multer')({
        dest: __dirname + '../../../uploads'
    })
    app.post('/admin/api/uploads',multer.single('file'),async (req,res)=>{
        const file = req.file
        file.src = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })


    app.use('/admin/api/:resource',async (req,res,next)=>{
        const modelname = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelname}`)
        next()
    },router)
}