const db = require('../model');
const Recomendation = db.recomendations;

// Find all recomendations
exports.findAll = async (req, res) => {
    const recomendations = await Recomendation.find({});
    if (recomendations.length === 0){
        return res.status(400).send({ message: "No recomendations in data base yet."})
    }
    res.send({ results: recomendations });
};