"use strict";
const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
//https://dev.to/franciscomendes10866/using-cookies-with-jwt-in-node-js-8fn
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const dataRoutes = require("../routes/data.routes");
const { now } = require("mongoose");
exports.signup = (req, res) => {
    // Save User to Database
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then((user) => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            }).then((roles) => {
                user.setRoles(roles).then(() => {
                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
        else {
            // user role = 1
            user.setRoles([1]).then(() => {
                res.send({ message: "User was registered successfully!" });
            });
        }
    })
        .catch((err) => {
        res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then((user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: Number(process.env.EXPIRES_TOKEN) // 24 hours
        });
        var authorities = [];
        let exp = Date.now() + Number(process.env.EXPIRES);
        user.getRoles().then((roles) => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                exp: Number(Date.now()) + Number(process.env.EXPIRES)
            });
        });
    })
        .catch((err) => {
        res.status(500).send({ message: err.message });
    });
};
