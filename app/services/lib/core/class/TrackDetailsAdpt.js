"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackDetailDeezer = void 0;
class TrackDetailDeezer {
    constructor(json) {
        this.origin = 'deezer';
        // console.log(typeof(this)+"**"+json);
        this.artist = json.artist;
        this.id = json.id;
        this.released = json.release_date;
        this.preview = json.preview;
        this.link = json.link;
        this.name = json.title;
        this.name_short = json.title_short;
        this.lenght = json.duration;
    }
}
exports.TrackDetailDeezer = TrackDetailDeezer;
