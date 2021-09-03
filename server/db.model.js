const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhysicsSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    batch:{
        type: String,
        required: true,
    },
    number:{
        type: String,
    },
    status:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    designation:{
        type: String,
    },
    institute:{
        type: String,
    },
    exam:{
        type: String,
    },
    department:{
        type: String,
    },
    cmnts:{
        type: String,
    },
    field:{
        type: String,
    },
    key:{
        type: String,
        required: true,
    }
})

const People = mongoose.model('people', PhysicsSchema);
module.exports = People;

