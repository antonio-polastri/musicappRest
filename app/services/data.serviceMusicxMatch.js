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
const Service_1 = require("./lib/core/Service");
//https://api.musixmatch.com/ws/1.1
const APIKEY = '&apikey=892d0f3bd3be69049533153cecd73702';
class DataServiceMusicxMatch extends Service_1.DataServiceAbstract {
    constructor() {
        super(Call.axiosRequestItunes);
        //get artist from research
        this.getArtist = (term) => __awaiter(this, void 0, void 0, function* () {
            //  return await this.axiosService.get('artist?query=' + term).then(response => response.data);
            return Array();
        });
        this.getArtistDetails = (params) => __awaiter(this, void 0, void 0, function* () {
            //  return await this.axiosService.get('artist?query=' + params).then(response => response.data);
        });
        this.getReleaseCredits = (releaseId) => __awaiter(this, void 0, void 0, function* () {
        });
        //get albums details
        this.getAlbums = (id) => __awaiter(this, void 0, void 0, function* () {
            return Array();
            //    return await this.axiosService.get(`release?artist=${id}&type=album|ep`).then(response => response.data);
        });
        //ex  https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=88835325&apikey=892d0f3bd3be69049533153cecd73702
        this.getLyrics = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.axiosService.get(`track.lyrics.get?track_id=${id}${APIKEY}`).then((response) => {
                if (response.data.message.header['status_code'] === 200) {
                    return response.data.message.body.lyrics['lyrics_body'];
                }
                else
                    return '';
            });
        });
        //ex  https://api.musixmatch.com/ws/1.1/track.search?q_artist=jamiroquai&q_track=to die&page_size=1&page=1&s_track_rating=desc&apikey=892d0f3bd3be69049533153cecd73702
        this.getTrackFromLists = (artistName, trackName) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(artistName);
                console.log(trackName);
                return yield this.axiosService.get(`track.search?q_artist=${artistName}&q_track=${trackName}&page_size=1&page=1&s_track_rating=desc${APIKEY}`).then((response) => {
                    //   console.log(response.data);
                    //  alert(response.data.message.header['status_code']);
                    if (response.data.message.header['status_code'] === 200) {
                        //   console.log(response.data)
                        let trackId = response.data.message.body['track_list'][0].track['track_id'];
                        // alert(response.data.message.body )
                        let lyrics = this.getLyrics(trackId);
                        return lyrics;
                    }
                    else {
                        return null;
                    }
                    ;
                });
            }
            catch (error) {
            }
        });
    }
    getSearch(q, tos) {
        throw new Error('Method not implemented.');
    }
    getTracks(albumId) {
        throw new Error('Method not implemented.');
    }
    getTrack(trackId) {
        throw new Error('Method not implemented.');
    }
    getBio(artistId) {
        throw new Error('Method not implemented.');
    }
}
exports.default = new DataServiceMusicxMatch();
