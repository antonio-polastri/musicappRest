"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Call = __importStar(require("./lib/config/api"));
const options_1 = require("./lib/config/options");
const AlbumAdpt = __importStar(require("./lib/core/class/Album"));
const ArtistAdpt = __importStar(require("./lib/core/class/Artist"));
const Service_1 = require("./lib/core/Service");
const TrackAdpt = __importStar(require("./lib/core/class/Track"));
class DataServiceDiscogs extends Service_1.DataServiceAbstract {
    constructor() {
        super(Call.axiosRequestDS);
        this.token = '&token=AewajmAUAVgBcbOuIgjuNDzfcRcQihTkwloznSNf';
        this.getSearch = (q, tos) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`database/search?q=${q}&type=${options_1.typeOfSeachDiscogs[tos]}${this.token} `).then(response => {
                switch (tos) {
                    case 'artist':
                        var returnedValue = [];
                        response.data.results.forEach((element) => {
                            if (element.type == 'artist')
                                returnedValue.push(new ArtistAdpt.ArtistDiscogs(element));
                        });
                        return returnedValue;
                    case 'track':
                        let returnedValuet = [];
                        // console.log(response.data)
                        response.data.results.forEach((element) => {
                            returnedValuet.push(new TrackAdpt.TrackDiscogs(element, response.data));
                        });
                        return returnedValuet;
                    case 'album':
                        let returnedValuea = [];
                        response.data.results.forEach((element) => {
                            console.log(element);
                            if (element.type == 'release')
                                returnedValuea.push(new AlbumAdpt.AlbumDiscogs(element));
                        });
                        return returnedValuea;
                }
            });
        });
        this.getArtist = (q) => __awaiter(this, void 0, void 0, function* () {
            let searcStr = `database/search?q=${q}&type=artist${this.token}`;
            return yield this.axiosService
                .get(searcStr)
                .then(response => {
                var returnedValue = [];
                response.data.results.forEach((element) => {
                    returnedValue.push(new ArtistAdpt.ArtistDiscogs(element));
                });
                return returnedValue;
            });
        });
        this.getAlbums = (artistid) => __awaiter(this, void 0, void 0, function* () {
            let searcStr = `/artists/${artistid}/releases?page=1&per_page=400&sort=year&sort_order=asc`;
            //resolve pagination problems
            return yield this.axiosService
                .get(searcStr)
                .then(response => {
                let returnedValue = [];
                response.data.releases.forEach((element) => {
                    returnedValue.push(new AlbumAdpt.AlbumDiscogs(element, artistid));
                });
                return returnedValue;
            });
        });
        this.getTracks = (releaseId) => __awaiter(this, void 0, void 0, function* () {
            let searcStr = `/releases/${releaseId}`;
            return yield this.axiosService.get(searcStr).then(response => {
                let returnedValue = [];
                response.data.tracklist.forEach((element) => {
                    returnedValue.push(new TrackAdpt.TrackDiscogs(element, response.data));
                });
                return returnedValue;
            });
        });
        this.getBio = (artistId) => __awaiter(this, void 0, void 0, function* () {
            let searcStr = `/artists/${artistId}`;
            return yield this.axiosService.get(searcStr).then(response => response.data);
        });
    }
    getTrack(trackId) {
        throw new Error('Method not implemented.');
    }
}
exports.default = new DataServiceDiscogs();
