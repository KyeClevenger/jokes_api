const Jokes = require ("../models/jokes.model")

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
    .then((allTheJokes) => 
        res.json({jokes: allTheJokes})
    )
    .catch ((err) =>
        res.json(err)
    );
}

module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({_id: req.params.id})
    .then((OneJoke) => 
        res.json({joke: OneJoke})
    )
    .catch ((err) =>
        res.json(err)
    );
}

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
    .then((createNewJoke) => 
        res.json({joke: createNewJoke})
    )
    .catch ((err) =>
        res.json(err)
    );
}


module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({_id: req.params.id}, req.body,  
        { new: true, runValidators: true })
    .then((updateJoke) => 
        res.json({joke: updateJoke})
    )
    .catch ((err) =>
        res.json(err)
    );
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({_id: req.params.id})
    .then((deleteJoke) => 
        res.json({joke: deleteJoke})
    )
    .catch ((err) =>
        res.json(err)
    );
}