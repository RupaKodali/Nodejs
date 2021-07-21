const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    order_id: {type:String},
    buyer_name: {type:String},
    buyer_email: {type:String},
    date_ordered: {type:String},
    total_amount: {type:String},
    products:{type:Array},
    payment_type: {type:String}
})

module.exports = mongoose.model('Orders', OrderSchema)