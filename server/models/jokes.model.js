const mongoose = require("mongoose")

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String, 
        required: [true, "Setup is required"],
        minlength: [10,"Setup must be 10 characters"]
    },

    punchline: {
        type: String, 
        required: [true, "Punchline is required"],
        minlength: [3,"Punchline must be 3 characters"]
    }

}, {timestamps: true})

const Jokes =mongoose.model('Jokes', JokesSchema)

module.exports = Jokes