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
const AlbumAdpt = __importStar(require("./lib/core/class/Album"));
const ArtistAdpt = __importStar(require("./lib/core/class/Artist"));
const TrackAdpt = __importStar(require("./lib/core/class/Track"));
const Service_1 = require("./lib/core/Service");
const options_1 = require("./lib/config/options");
//https://github.com/Borewit/musicbrainz-api
//https://musicbrainz.org/doc/MusicBrainz_Entity
//la query potrebbe cambiare in base al tipo di dati raccolti
class DataServiceMusicbrainz extends Service_1.DataServiceAbstract {
    constructor() {
        super(Call.axiosRequestMB);
        this.getSearch = (q, tos) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`${options_1.typeOfSeachMusicb[tos]}?query=${q}`).then(response => {
                switch (tos) {
                    case 'artist':
                        var returnedValue = [];
                        response.data.artists.forEach((element) => {
                            returnedValue.push(new ArtistAdpt.ArtistMusicBrainz(element));
                        });
                        // console.log(response.data);
                        return returnedValue;
                    case 'track':
                        console.log(response.data);
                        let returnedValuet = [];
                        console.log(response.data);
                        response.data.recordings.forEach((element) => {
                            returnedValuet.push(new TrackAdpt.TrackMusicBrainz(element));
                        });
                        return returnedValuet;
                    case 'album':
                        let returnedValuea = [];
                        response.data.results.forEach((element) => {
                            returnedValuea.push(new AlbumAdpt.AlbumMusicBrainz(element));
                        });
                        return returnedValuea;
                }
            });
        });
        //get artist from research
        this.getArtist = (term) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get('artist?query=' + term).then(response => {
                var returnedValue = [];
                response.data.artists.forEach((element) => {
                    returnedValue.push(new ArtistAdpt.ArtistMusicBrainz(element));
                });
                // console.log(response.data);
                return returnedValue;
            });
        });
        this.getArtistDetails = (params) => __awaiter(this, void 0, void 0, function* () {
            //https://musicbrainz.org/ws/2/artist/f90e8b26-9e52-4669-a5c9-e28529c47894
            return yield this.axiosService.get('artist?query=' + params).then(response => response.data);
        });
        this.getReleaseCredits = (releaseId) => __awaiter(this, void 0, void 0, function* () {
            //   https://musicbrainz.org/ws/2/release/ff049656-0f4a-4126-bf1e-32597cd6a05b?inc=artist-credits
        });
        //get albums details
        this.getAlbums = (id) => __awaiter(this, void 0, void 0, function* () {
            console.log(`release-group?artist=${id}&type=album|ep`);
            //A release group, just as the name suggests, is used to group several different releases into a single logical entity. Every release belongs to one, and only one release group.
            //https://musicbrainz.org/ws/2/release-group?artist=3bf74908-e8b3-4158-8fae-4fd795bb4474&type=album|ep
            //return await this.axiosService.get(`artist/${id}/?inc=releases`).then(response => response.data);
            return yield this.axiosService.get(`release?artist=${id}&type=album|ep&&fmt=json`).then(response => {
                //console.log(response.data);
                var returnedValue = [];
                response.data.releases.forEach((element) => {
                    returnedValue.push(new AlbumAdpt.AlbumMusicBrainz(element));
                });
                return returnedValue;
            });
        });
        //get tracks details
        this.getTracks = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`release/${id}/?inc=artist-credits+labels+recordings+recording-level-rels+work-rels+work-level-rels+artist-rels`).then((response) => {
                var returnedValue = [];
                // console.log(response.data)
                response.data.media[0].tracks.forEach((element) => {
                    returnedValue.push(new TrackAdpt.TrackMusicBrainz(element));
                });
                return returnedValue;
            });
        });
    }
    getTrack(trackId) {
        throw new Error('Method not implemented.');
    }
    getBio(artistId) {
        throw new Error('Method not implemented.');
    }
}
exports.default = new DataServiceMusicbrainz();
