const {Schema, model} = require('mongoose');

const RecomendationsSchema = Schema(
    {
        reco_id: {
            type: String,
            require: [true, 'Reco id is required']
        },
        time_reco: {
            type: Date,
            require: [true, 'time reco is required']
        },
        id_sender: {
            type: String,
            require: [true, 'id sender is required']
        },
        id_reciever: {
            type: String,
            require: [true, 'id reciever is required']
        },
        id_product: {
            type: String,
            require: [true, 'id product is required']
        },
        product_bought: {
            type: Number,
            require: [true, 'Product bought is required']
        },
    },
    {
        versionKey: false
    }
);

module.exports = model('Recomendation', RecomendationsSchema);