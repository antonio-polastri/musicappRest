"use strict";
const { authJwt } = require("../middleware/index");
const controller = require("../controllers/data.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });
    app.get("/api/search/", [authJwt.verifyToken], controller.search);
    app.get("/api/artist/", [authJwt.verifyToken], controller.artist);
    app.get("/api/albums/", [authJwt.verifyToken], controller.albums);
    app.get("/api/songs/", [authJwt.verifyToken], controller.songs);
    app.get("/api/trackdetail/", [authJwt.verifyToken], controller.trackdetail);
    app.get("/api/lyric/", [authJwt.verifyToken], controller.lyric);
    app.get("/api/bio/", [authJwt.verifyToken], controller.bio);
    app.get("/api/concert/", [authJwt.verifyToken], controller.concerts);
    app.get("/api/hotel/", /* [authJwt.verifyToken],*/ controller.hotels);
};
