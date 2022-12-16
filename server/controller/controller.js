var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // create and save new user
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!!"
        });
        return;
    }

    // new user
    const user = new Userdb({
        rollNumber: req.body.rollNumber,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        languages: req.body.languages,
        githubUsername: req.body.githubUsername,
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating operation"
            });
        });

}

// retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {

}

// update a new identified user by user id
exports.update = (req, res) => {

}

// delete a user with specified user id in the request
exports.delete = (req, res) => {

}