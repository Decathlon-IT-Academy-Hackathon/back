module.exports = mongoose => {
    const Product = mongoose.model(
        'product',
        mongoose.Schema(
            {
                modeild: {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
                weblabel: {
                    type: String,
                    required: [true, 'Weblabel is required']
                },
                brand: {
                    type: String,
                    required: [true, 'Brand is required']
                },
                catchline: {
                    type: String,
                    required: [true, 'Catch is required']
                },
                productnature: {
                    type: String,
                    required: [true, 'Product is required']
                },
                family: {
                    type: String,
                    required: [true, 'Family is required']
                },
                reviewAverageRating: {
                    type: Number,
                    required: [true, 'Average rating is required']
                },
                displayPriceAmount: {
                    type: Number,
                    required: [true, 'Display price is required']
                },
                listPriceAmount: {
                    type: Number,
                    required: [true, 'List price is required']
                },
            },
            {
                versionKey: false
            }
        )
    );
    return Product;
};