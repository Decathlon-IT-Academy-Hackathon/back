module.exports = mongoose => {
    const User = mongoose.model(
        'user',
        mongoose.Schema(
            {
                'modeild': {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
                'weblabel': {
                    type: Number,
                    required: [true, 'Weblabel is required']
                },
                'brand': {
                    type: Number,
                    required: [true, 'Brand is required']
                },
                'catchline': {
                    type: Number,
                    required: [true, 'Catch is required']
                },
                'productnature': {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
                'family': {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
                'Review-AverageRating': {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
                'DisplayPrice-Amount': {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
                'ListPrice-Amount': {
                    type: Number,
                    required: [true, 'Modeild is required']
                },
            },
            {
                versionKey: false
            }
        )
    );
    return User;
};