const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
    user_id: {type: Number},
    date: {type: Date,},
    page_views: {type: Number,},
    clicks: {type: Number},
});

module.exports = model('Users_statistic', schema);