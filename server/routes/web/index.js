module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Article = mongoose.model('Article')
    const Category = mongoose.model('Category')

    router.get('/news/init', async (req, res) => {
        const parentCat = await Category.findOne(
            {
                name: "新闻分类"
            }
        )
        const cats = await Category.find().where({
            parent: parentCat
        }).lean()
        const newsTitles = ["体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光", "情人节限定皮肤爆料丨喜鹊筑桥，嫦娥后羿月下相逢", "觉醒之战即将再度开启！鬼谷子全屏大，露娜无限连", "新皮肤爆料丨AI意识觉醒，机器少女妲己绚丽登场！", "王者荣耀祝各位召唤师春节快乐！", "2月18日全服不停机更新公告", "【已修复】关于部分召唤师点券充值未到账、点券到账延迟等问题说明", "2月20日净化游戏环境声明及处罚公告", "2月20日“演员”惩罚名单", "2月20日外挂专项打击公告", "峡谷来相聚 初春有好礼", "创意互动营-云中君皮肤设计大赛投票开启", "爱在峡谷携手度 甜蜜好礼轻松得", "元宵福利到 峡谷好热闹！", "妲己新皮肤即将上架 全新好礼不容错过！", "王者荣耀世界冠军杯总决赛落地首都北京", "2020年《王者荣耀》职业赛事（KPL与KPLGT）春季赛开赛调整公告", "中国电竞小伙逐梦记", "2019年赛事数据盘点，峡谷最强选手全知道！", "2020KPL春季赛大名单公示"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })
    router.get('/news/list', async (req, res) => {
        const parent = await Category.findOne({
            name: "新闻分类"
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: { $slice: ['$newsList', 5] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories: { $in: subCats },
            }).populate('categories').limit(5).lean()
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '热门') ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })
    app.use('/web/api', router)
}