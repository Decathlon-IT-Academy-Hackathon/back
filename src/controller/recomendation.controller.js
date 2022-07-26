
const Recomendation = require('../model/recomendation.model');

// Find all recomendations
exports.findAll = async (req, res) => {
    try {
        const recomendations = await Recomendation.find({});
        res.status(201).json({
            recomendations
        })
    } catch (error) {
        res.status(400).json({
            message: "No recomendations in data base yet"
        });
    };
};