"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceWrapper_1 = require("../services/lib/core/di/serviceWrapper");
const strategy_1 = require("../services/lib/core/strategy/strategy");
const data_serviceDeezer_1 = __importDefault(require("../services/data.serviceDeezer"));
const data_serviceDiscogs_1 = __importDefault(require("../services/data.serviceDiscogs"));
const data_serviceMusicbrainz_1 = __importDefault(require("../services/data.serviceMusicbrainz"));
const data_serviceLyrics_1 = __importDefault(require("../services/data.serviceLyrics"));
const data_serviceMusicxMatch_1 = __importDefault(require("../services/data.serviceMusicxMatch"));
const console_1 = __importDefault(require("console"));
const mongoDs_1 = require("../datasources/mongoDs");
//Import the mongoose module
const { Timestamp } = require('bson');
//open connection to db
let mds = new mongoDs_1.MongoDs();
exports.search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let q = req.query.q;
    let st = req.query.st;
    let rs = {};
    //check is id already present this kind of research
    mds.getSearch(q, st).then(function (result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (result[0]) {
                console_1.default.log("getdata" + result[0]);
                rs = yield mds.getData(q, st).then((response) => response).catch();
                console_1.default.log("getdata FROM MONGO++++++++++++++++++++++++++++++++++++++++++++++++" + rs.lenght);
            }
            else {
                rs = (yield new serviceWrapper_1.ServiceWrapper(data_serviceDiscogs_1.default).getSearch(q, st).then((response) => response).catch())
                    .concat(yield new serviceWrapper_1.ServiceWrapper(data_serviceDeezer_1.default).getSearch(q, st).then((response) => response).catch());
                // .concat(await new ServiceWrapper(DataServiceMusicbrainz).getSearch(q,st).then((response: any)=>response).catch())
                console_1.default.log("getdata FROM RESOURCE*************************************" + rs.lenght);
                mds.insertSearch(q, rs, st);
            }
            yield res.status(200).send(JSON.stringify(rs));
        });
    }).catch();
});
exports.artist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let q = req.query.q;
    let resultset = (yield new serviceWrapper_1.ServiceWrapper(data_serviceDeezer_1.default).getArtist(q).then((response) => response).catch())
        .concat(yield new serviceWrapper_1.ServiceWrapper(data_serviceDiscogs_1.default).getArtist(q).then((response) => response).catch())
        .concat(yield new serviceWrapper_1.ServiceWrapper(data_serviceMusicbrainz_1.default).getArtist(q).then((response) => response).catch());
    //sare research
    mds.insertSearch(q, resultset, 'artist');
    //mongo
    mds.insertArtist(resultset);
    res.status(200).send(JSON.stringify(resultset));
});
exports.albums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let artistid = req.query.artistid;
    let origin = req.query.origin;
    //get dataservice and pass it in 
    let ds = new strategy_1.DeterminateOrigin();
    let resultset = yield new serviceWrapper_1.ServiceWrapper(ds.getOrigin(origin)).getAlbums(artistid).then(response => { return response; }).catch();
    //mongodb
    mds.insertAlbum(resultset);
    res.status(200).send(JSON.stringify(resultset));
});
exports.songs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albumid = req.query.albumid;
    let origin = req.query.origin;
    let resultset = yield new serviceWrapper_1.ServiceWrapper(new strategy_1.DeterminateOrigin().getOrigin(origin)).getTracks(albumid).then(response => { return response; }).catch();
    mds.insertTrack(resultset);
    res.status(200).send(JSON.stringify(resultset));
});
exports.trackdetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.query.id;
    let resultset = yield new serviceWrapper_1.ServiceWrapper(data_serviceDeezer_1.default).getTrack(id).then(response => { return response; }).catch();
    res.status(200).send(JSON.stringify(resultset));
});
exports.lyric = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let artist = req.query.artist;
    let title = req.query.title;
    /*
        let resultset = await new ServiceWrapper(DataServiceDeezer).getTrack(id).then(response=>{return response}).catch()
    
        res.status(200).send(JSON.stringify(resultset) );
        */
    let lyric = (yield data_serviceLyrics_1.default.getLyrics(artist, title).then(response => { return response; }).catch(() => {
        "No lyrics found";
    }));
    if (lyric.lyric && lyric.lyric.indexOf("testo non ") !== -1)
        lyric = (yield data_serviceMusicxMatch_1.default.getTrackFromLists(artist, title).then(response => {
            return { 'lyric': response.split("*******")[0] };
        })
            .catch(() => {
            "No lyrics found";
        }));
    res.status(200).send(JSON.stringify(lyric));
});
