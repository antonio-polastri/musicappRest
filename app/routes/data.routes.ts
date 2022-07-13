const { authJwt } = require("../middleware/authJwt");
const controller  = require("../controllers/data.controller");

module.exports = function(app:any) {


    app.use(function(req :any, res:any, next:any) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get("/api/search/",controller.search );

    app.get("/api/artist/",controller.artist );

    app.get("/api/albums/",controller.albums );

    app.get("/api/songs/",controller.songs );

    app.get("/api/trackdetail/",controller.trackdetail );

    app.get("/api/lyric/",   controller.lyric );
   
 
};