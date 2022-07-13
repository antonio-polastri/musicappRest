"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoOperations = exports.lyricModel = exports.trackModel = exports.artistModel = exports.searchModel = exports.albumModel = void 0;
const mongoose_1 = require("mongoose");
//mongoose schema ad models
const artistSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    components: { type: Number, required: false },
    id: { type: String, required: true, index: true },
    origin: { type: String, required: true, index: true },
    image: { type: String, required: false },
    video: { type: String, required: false },
    descriptions: { type: String, required: false },
    albums: { type: Array, required: false },
    show: { type: Boolean, default: true },
});
artistSchema.index({ id: 1, origin: 1 }, { unique: true });
const searchSchema = new mongoose_1.Schema({
    query: { type: String, required: true, unique: true },
    count: { type: Number, required: true },
    searchType: { type: String, required: true }
}, {
    timestamps: true
});
const albumSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lenght: { type: Number, required: false },
    artist: { type: String, required: false },
    id: { type: String, required: true, index: true },
    origin: { type: String, required: true, index: true },
    image: { type: String, required: false },
    video: { type: String, required: false },
    date: { type: String, required: false },
    release: { type: String, required: false },
    artistid: { type: String, required: false },
    tracks: { type: Array, required: false },
    label: { type: String, required: false },
    format: { type: String, required: false },
    url: { type: String, required: false },
});
albumSchema.index({ id: 1, origin: 1 }, { unique: true });
const trackSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lenght: { type: Number, required: false },
    artist: { type: String, required: false },
    id: { type: String, required: true, index: true },
    origin: { type: String, required: true, index: true },
    image: { type: String, required: false },
    video: { type: String, required: false },
    albumid: { type: Number, required: false },
    artistid: { type: String, required: false },
    lyrics: { type: String, required: false },
    master_url: { type: String, required: false },
    released: { type: String, required: false },
    notes: { type: String, required: false },
    album_details: { type: String, required: false },
    position: { type: String, required: false },
    type: { type: String, required: false },
    link: { type: String, required: false },
});
trackSchema.index({ id: 1, origin: 1 }, { unique: true });
/*
export interface TrackDetail{

    name : string;
    name_short : string;
    lenght : number;
    artist : Object;
    id : number;
    origin : Origin;
    image : string;
    video : string;
    albumid : number;
    artistid : number;
    lyrics : string;
    released : string;
    album_details : object;
    position : string;
    type : string;
    link? : string;
    preview?:string;


}*/
const lyricSchema = new mongoose_1.Schema({
    id: { type: String, required: true, index: true },
    origin: { type: String, required: true, index: true },
    albumid: { type: String, required: false },
    artistid: { type: String, required: false },
    lyric: { type: String, required: false }
});
exports.albumModel = (0, mongoose_1.model)('Album', albumSchema);
exports.searchModel = (0, mongoose_1.model)('Search', searchSchema);
exports.artistModel = (0, mongoose_1.model)('Artist', artistSchema);
exports.trackModel = (0, mongoose_1.model)('Track', trackSchema);
exports.lyricModel = (0, mongoose_1.model)('Lyric', lyricSchema);
//operation on mongo dbs
class mongoOperations {
}
exports.mongoOperations = mongoOperations;
