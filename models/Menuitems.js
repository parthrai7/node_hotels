const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 500

    },
    ing: {
        type: [String],
        default: []
    }
})

const menuitems = mongoose.model("Menuitems", menuSchema);
module.exports = menuitems;
