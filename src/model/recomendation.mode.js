module.exports = mongoose => {
    const Recomendation = mongoose.model(
        'recomendation',
        mongoose.Schema(
            {
                reco_id: {
                    type: String,
                    required: [true, 'Reco id is required']
                },
                time_reco: {
                    type: Date,
                    required: [true, 'time reco is required']
                },
                id_sender: {
                    type: String,
                    required: [true, 'id sender is required']
                },
                id_reciever: {
                    type: String,
                    required: [true, 'id reciever is required']
                },
                id_product: {
                    type: String,
                    required: [true, 'id product is required']
                },
                product_bought: {
                    type: Number,
                    required: [true, 'Product bought is required']
                },
            },
            {
                versionKey: false
            }
        )
    );
    return Recomendation;
};