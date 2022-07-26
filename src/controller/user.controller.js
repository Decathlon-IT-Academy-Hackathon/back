
const User = require('../model/user.model');

// Find all users
exports.findAll = async (req, res) => {
    try {
        const users = await User.find({});
        
        res.status(201).json({
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "No users in data base yet"
        })
    }

};
