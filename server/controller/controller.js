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
        githubUsername: req.body.githubUsername
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });


}

// retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: "Not found user with id " + id
                    })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retriving user with id " + id
                });
            });

    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error occurred while retriving user information"
                })
            })
    }
}

// update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({
                message: "Data to update connot be empty"
            })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update user with ${id}id. Maybe user not found!`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error update user information"
            })
        })

}

// delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with ${id}. Maybe id is wrong!`
                })
            } else {
                res.send({
                    message: "User was deleted successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id=" + id
            });
        });
}