const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
        minlength: [4, "Min length 4"]
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
        min: [0, "Price cannot be less than $0.00"]
    },
    image_url: {
        type: String
    }
}, {timestamps: true}
)

mongoose.model('Product', ProductSchema)