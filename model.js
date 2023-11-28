const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    favoriteFoods: {
        type: [String]
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', todoSchema);