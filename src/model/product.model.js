const { Schema, model } = require('mongoose');

const ProductSchema = Schema(
    {
        modeild: {
            type: Number,
            require: [true, 'Modeild is required']
        },
        weblabel: {
            type: String,
            require: [true, 'Weblabel is required']
        },
        brand: {
            type: String,
            require: [true, 'Brand is required']
        },
        catchline: {
            type: String,
            require: [true, 'Catch is required']
        },
        productnature: {
            type: String,
            require: [true, 'Product is required']
        },
        family: {
            type: String,
            require: [true, 'Family is required']
        },
        'Review-AverageRating': {
            type: Number,
            require: [true, 'Average rating is required']
        },
        'DisplayPrice-Amount': {
            type: Number,
            require: [true, 'Display price is required']
        },
        'ListPrice-Amount': {
            type: Number,
            require: [true, 'List price is required']
        },
    },
    {
        versionKey: false
    }
);

module.exports = model('Product', ProductSchema);
