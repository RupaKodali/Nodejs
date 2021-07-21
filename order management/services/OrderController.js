const Order = require("../models/OrderSchema")
class ordercontoller {
    ordercontoller() {

    }
    // addOrder(req, res) {
    //     // var total_amount = 0;
    //     // req.body.products.forEach(element => {
    //     //     var item_total = element.price * element.quantity
    //     //     element["item_total"] = item_total
    //     //     total_amount = total_amount + item_total;
    //     // });
    //     var order = new Order({     
    //         order_id: req.body.data.order_id,
    //         buyer_name: req.body.data.buyer_name,
    //         buyer_email: req.body.data.buyer_email,
    //         date_ordered: req.body.data.purchase_date,
    //         total_amount: req.body.data.order_amount,
    //         products: req.body.data.product_info,
    //         payment_type:req.body.data.payment_type
    //     })
    //     order.save((err, data) => {
    //         if (err) {
    //             console.log(err)
    //             res.send({ Status: false, message: 'error' })
    //         }
    //         else {
    //             res.send({ Status: true, data: data, message: 'Data inserted' })
    //             console.log("data inserted")
    //         }
    //     })
    // }
    getallOrders(req, res) {
        Order.find((err, data) => {
            if (!err && data)
                res.send({ Status: true, data: data, message: 'Retrieved order' })
            else {
                console.log(err)
                res.send({ Status: false, message: 'error' })
            }

        })
    }
    getOrder(req, res) {
        Order.findOne({ order_id: req.query.order_id }, (err, data) => {
            if (!err && data)
                res.send({ Status: true, data: data, message: 'Retrieved order' })
            else {
                console.log(err)
                res.send({ Status: false, message: 'error' })
            }
        })
    }
    postOrder(req, res) {
        var order = new Order({
            order_id: req.body.data.order_id,
            buyer_name: req.body.data.buyer_name,
            buyer_email: req.body.data.buyer_email,
            date_ordered: req.body.data.purchase_date,
            total_amount: req.body.data.order_total,
            products: req.body.data.product_data,
            payment_type: req.body.data.payment_type
        })
        order.save((err, data) => {
            if (err) {
                console.log(err)
                res.send({ Status: false, message: 'error' })
            }
            else {
                res.send({ Status: true, data: data, message: 'Data inserted' })
            }
        })
    }
}
const o = new ordercontoller()
module.exports = o;