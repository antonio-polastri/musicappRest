"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAbstractClass = exports.LyricsAbstractClass = exports.TrackDetailAbstractClass = exports.TrackAbstractClass = exports.ArtistAbstractClass = exports.AlbumAbstractClass = void 0;
/**  Concrete class for album */
class AlbumAbstractClass {
    constructor(json, artistid) {
        this.show = true;
        this.initial(json);
    }
}
exports.AlbumAbstractClass = AlbumAbstractClass;
/** Concrete class for artist */
class ArtistAbstractClass {
    constructor(json) {
        this.show = true;
        this.initial(json);
    }
}
exports.ArtistAbstractClass = ArtistAbstractClass;
/** Concrete class for track */
class TrackAbstractClass {
    constructor(json, i) {
        this.show = true;
        this.initial(json, i);
    }
}
exports.TrackAbstractClass = TrackAbstractClass;
/** Concrete class for TrackDetail */
class TrackDetailAbstractClass {
    constructor(json) {
        this.show = true;
        this.initial(json);
    }
}
exports.TrackDetailAbstractClass = TrackDetailAbstractClass;
/** Concrete class for Lyrics */
class LyricsAbstractClass {
    constructor(json) {
        this.show = true;
        this.initial(json);
    }
}
exports.LyricsAbstractClass = LyricsAbstractClass;
class EventAbstractClass {
    constructor(json) {
        this.show = true;
        this.initial(json);
    }
}
exports.EventAbstractClass = EventAbstractClass;
