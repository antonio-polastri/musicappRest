"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistMusicBrainz = exports.ArtistItunes = exports.ArtistDiscogs = exports.ArtistDeezer = void 0;
const musicObject_1 = require("../musicObject");
class ArtistDeezer extends musicObject_1.ArtistAbstractClass {
    initial(json) {
        this.origin = "deezer";
        //  console.log(json);
        this.name = json.name;
        this.components = 0;
        this.id = json.id;
        this.image = json.picture;
    }
}
exports.ArtistDeezer = ArtistDeezer;
class ArtistDiscogs extends musicObject_1.ArtistAbstractClass {
    initial(json) {
        // console.log(json);
        this.origin = "discogs";
        this.name = json.title;
        this.components = 0;
        this.id = json.id;
        this.image = json.thumb;
        this.video = '';
        this.descriptions = '';
        this.albums = [];
    }
}
exports.ArtistDiscogs = ArtistDiscogs;
class ArtistItunes extends musicObject_1.ArtistAbstractClass {
    initial(json) {
        this.origin = "itunes";
    }
}
exports.ArtistItunes = ArtistItunes;
class ArtistMusicBrainz extends musicObject_1.ArtistAbstractClass {
    initial(json) {
        console.log(json);
        this.origin = "musicbrainz";
        this.id = json.id;
        this.name = json.name;
        this.descriptions = json.disambiguation;
    }
}
exports.ArtistMusicBrainz = ArtistMusicBrainz;
