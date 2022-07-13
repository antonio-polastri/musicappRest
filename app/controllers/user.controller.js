const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };
 

  exports.allUsers = (req, res) => {

    User.findAll({
      include:[
        {
          model : db.role
        }
      ]
    }).then(user => {
        
        res.status(200).send(user);
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
    };
 