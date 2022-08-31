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
const TrackAdpt = __importStar(require("./lib/core/class/Track"));
const TrackDetailsAdpt = __importStar(require("./lib/core/class/TrackDetailsAdpt"));
const Service_1 = require("./lib/core/Service");
const Album_1 = require("./lib/core/class/Album");
class DataServiceDeezer extends Service_1.DataServiceAbstract {
    constructor() {
        super(Call.axiosRequestDeezer);
        this.getSearch = (q, tos) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`/search/${options_1.typeOfSeachDez[tos]}/?q="${q}"&output=json`).then(response => {
                switch (tos) {
                    case 'artist':
                        let returnedValue = [];
                        response.data.data.forEach((element) => {
                            returnedValue.push(new ArtistAdpt.ArtistDeezer(element));
                        });
                        return returnedValue;
                    case 'track':
                        let returnedValuet = [];
                        let i = 0;
                        response.data.data.forEach((track) => {
                            i++;
                            returnedValuet.push(new TrackAdpt.TrackDeezer(track, i));
                        });
                        return returnedValuet;
                    case 'album':
                        let returnedValuea = [];
                        response.data.data.forEach((element) => {
                            returnedValuea.push(new AlbumAdpt.AlbumDeezer(element));
                        });
                        return returnedValuea;
                }
            });
        });
        this.getArtist = (q) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`/search/artist/?q=${q}&output=json`).then(response => {
                var returnedValue = [];
                response.data.data.forEach((element) => {
                    returnedValue.push(new ArtistAdpt.ArtistDeezer(element));
                });
                return returnedValue;
            });
        });
        this.getAlbums = (artistID) => __awaiter(this, void 0, void 0, function* () {
            //the solutions is a proxy server tht repay the request
            return yield this.axiosService.get(`/artist/${artistID}/albums`).then(response => {
                // console.log(response.data)
                var returnedValue = [];
                response.data.data.forEach((element) => {
                    returnedValue.push(new Album_1.AlbumDeezer(element, artistID));
                });
                return returnedValue;
            });
        });
        this.getTracks = (albumId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`/album/${albumId}`).then(response => {
                let returnedValue = [];
                let i = 0;
                response.data.tracks.data.forEach((track) => {
                    i++;
                    returnedValue.push(new TrackAdpt.TrackDeezer(track, i));
                });
                // console.log(returnedValue);
                return returnedValue;
            });
        });
        //get single track data, specific for deezen
        this.getTrack = (trackId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`/track/${trackId}`).then((response) => {
                let a = new TrackDetailsAdpt.TrackDetailDeezer(response.data);
                console.log(a);
                return a;
            });
        });
        this.getBio = (artistId) => __awaiter(this, void 0, void 0, function* () {
            return null; //await this.axiosService.get(`/artists/${artistId}`).then(response => response.data);
        });
    }
}
exports.default = new DataServiceDeezer();
