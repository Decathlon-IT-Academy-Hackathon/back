module.exports = mongoose => {
    const User = mongoose.model(
        'user',
        mongoose.Schema(
            {
                person_id: {
                    type: String,
                    require: [true, 'Person Id is required']
                },
                conplete_name:{
                    type: String,
                    require: [true, 'Name is required']
                },
                age: {
                    type: Number,
                    require: [true, 'Age is required']
                },
                adress: {
                    type: String,
                    require: [true, 'Adress is required']
                }
            },
            {
                versionKey: false
            }
        )
    );
    return User;
};