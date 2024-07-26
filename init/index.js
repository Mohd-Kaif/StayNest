const mongoose = require('mongoose');
const Listing = require('../models/listing.js');
const initData = require('./data.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";

main()
    .then(() => {
        console.log("Connected to Db");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL)
}

const initDB = async () => {
    await Listing.deleteMany();
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();