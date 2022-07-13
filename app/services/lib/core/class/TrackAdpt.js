"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackMusicBrainz = exports.TrackItunes = exports.TrackDiscogs = exports.TrackDeezer = void 0;
const musicObject_1 = require("../musicObject");
class TrackDeezer extends musicObject_1.TrackAbstractClass {
    initial(json) {
        this.origin = "deezer";
        // console.log(i);
        this.id = json.id;
        this.name = json.title_short;
        this.lenght = json.duration;
        this.link = json.link;
        this.position = String(i);
    }
}
exports.TrackDeezer = TrackDeezer;
class TrackDiscogs {
    constructor(track, json) {
        this.origin = "discogs";
        this.name = track.title;
        this.lenght = parseInt(track.duration);
        this.artist = json.artists_sort;
        this.id = '0';
        this.image = '';
        this.video = '';
        this.albumid = json.masterid;
        this.artistid = '';
        this.lyrics = '';
        this.master_url = json.master_url;
        this.released = json.released;
        this.notes = json.notes;
        this.position = track.position;
        this.type = track.track;
    }
}
exports.TrackDiscogs = TrackDiscogs;
class TrackItunes extends musicObject_1.TrackAbstractClass {
    initial(json) {
        this.origin = "itunes";
    }
}
exports.TrackItunes = TrackItunes;
class TrackMusicBrainz extends musicObject_1.TrackAbstractClass {
    initial(json) {
        this.origin = "musicbrainz";
        //  console.log(json);
        this.id = json.id;
        this.name = json.title;
        this.lenght = json.length;
        this.position = json.position;
        let ext = this.extraartist = json['artist-credit'];
        if (ext) {
            this.artistid = ext[0].artist.id;
            this.artist = ext[0].artist.name;
        }
    }
}
exports.TrackMusicBrainz = TrackMusicBrainz;
