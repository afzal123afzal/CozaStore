const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CouponSchema = new Schema({
    couponCode:{
        type : String,
        trim : true,
        required : true,
    },
    couponValue :{
        type : Number,
        trim : true
    },
    minBill :{
        type : Number,
        trim : true
    },
    couponExpiry :{
        type : Date,
        trim : true
    },
    users : [{
        type : String,
        trim : true
    }],
    status: {
        type : String
    }  
}, {timestamps: true})

// model to access schema
const Coupon = mongoose.model('Coupon',CouponSchema)
module.exports = Coupon;