const {Schema, model} = require('mongoose');

const schema = new Schema ({
    id: {type: Number, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String},
    gender: {type: String},
    ip_address: {type: String},
});


module.exports = model('User', schema);

