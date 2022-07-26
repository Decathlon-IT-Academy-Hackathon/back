const mongoose = require('mongoose');
const User = require('../model/user.model');
const Product = require('../model/product.model');
const Recomendation = require('../model/recomendation.model');
const initialUsers = require('../json/users.json');
const initialProducts = require('../json/products.json');
const initialRecomendations = require('../json/recomendations.json');


const createUsers = async () => {
    try {
        const count = await User.estimatedDocumentCount();

        if (count > 0) {
            return;
        };
        console.log(`Adding users to the database...`);
        await User.create(initialUsers);
        console.log(`Users added to the database successfully.`);

    } catch (error) {
        console.log(error);
        console.error('Error creating users in the database.');
    }
};


const createRecomendations = async () => {
    try {
        const count = await Recomendation.estimatedDocumentCount();

        if (count > 0) {
            return;
        };
        console.log(`Adding recomendations to the database...`);
        await Recomendation.create(initialRecomendations);
        console.log(`Recomendations added to the database successfully.`);

    } catch (error) {
        console.log(error);
        console.error('Error creating recomendations in the database.');
    }
};

const createProducts = async () => {
    try {
        const count = await Product.estimatedDocumentCount();

        if (count > 0) {
            return;
        };
        console.log(`Adding products to the database...`);
        await Product.create(initialProducts);
        console.log(`Products added to the database successfully.`);

    } catch (error) {
        console.log(error);
        console.error('Error creating products in the database.');
    }
};

module.exports = {
    createUsers,
    createRecomendations,
    createProducts
};