"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyricsOvh = void 0;
const musicObject_1 = require("../musicObject");
class LyricsOvh extends musicObject_1.LyricsAbstractClass {
    initial(json) {
        this.origin = "lyricsovh";
        this.lyric = json.lyrics;
        this.id = '';
        this.albumid = '';
        this.artistid = '';
    }
}
exports.LyricsOvh = LyricsOvh;
