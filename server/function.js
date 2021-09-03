const People  = require('./db.model');

const job = async (req, res) =>{
    const results = await People.find({key:"JOB"})
    res.send(results)
}

const fs = async (req, res) =>{
    const results = await People.find({key:"FURTHER STUDIES"})
    res.send(results)
}

const business = async (req, res) =>{
    const results = await People.find({key:"BUSINESS"})
    res.send(results)
}

module.exports = {
    job,
    fs,
    business,
};

