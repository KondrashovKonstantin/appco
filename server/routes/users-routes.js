const { Router } = require('express');
const User = require('../models/User')
const Statistic = require('../models/Users_statistic')

const router = Router();


router.get('/:userid', async (req, res) => {
    try {
        User.findOne({ id: req.params.userid }, async (err, result) => {
            Statistic.find({ user_id: req.params.userid }, async (err, stat) => {
                res.status(200).json({ user:result, stat })
            })
        })
    }
    catch (e) {
        res.status(500).json({ message: 'somthing went wrong, try again...  ERROR : ' + e })
    }
})
router.get('', async (req, res) => {
    const page = req.query.page != null ? req.query.page : 1;
    const limit = req.query.limit != null ? req.query.limit : 25;
    const skipCount = (page - 1) * limit
    try {
        if (limit <= 50) {
            let totalDocsCount = await User.countDocuments();
            let pagesCount = Math.ceil(totalDocsCount / limit)
            let items = await User.find().sort({ id: 1 }).skip(skipCount).limit(Number(limit)).lean()
            for (let object of items) {
                let stats = await Statistic.aggregate([{ $match: { user_id: object.id } }, { $group: { _id: object.id, views: { $sum: '$page_views' }, clicks: { $sum: '$clicks' } } }])
                object.stats = stats[0]
            }
            res.status(200).json({ items, paginatorInfo: { totalDocsCount, pagesCount } })
        }
        else {
            res.status(400).json({ message: 'max limit of items per page can\'t exceed 50' })
        }
    }
    catch (e) {
        res.status(500).json({ message: 'somthing went wrong, try again...  ERROR :' + e });
        console.log(e)
    }
})

module.exports = router