const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        enum: ['E', 'T', 'M'],
    },
    releaseDate: {
        type: Date,
        default: new Date(),
    },
},
{
    timestamps: true,
})

// Mongoose Schemas
// create a new instance of the mongoose Schema class
// { } - we define the schema, the Schema class' constructor expects an object
// { key: value } // constructor specifies a valid data type

// we create a new instance of the Schema - provide some function/structure to the model
// model -> use schema for insterfacing with the DB

module.exports = mongoose.model("Game", gameSchema);