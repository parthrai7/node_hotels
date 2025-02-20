const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['chef', 'waiter', 'manager'], required: true },
    salary: { type: Number, required: true }
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
