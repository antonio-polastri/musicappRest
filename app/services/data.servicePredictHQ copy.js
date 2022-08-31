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
const Event_1 = require("./lib/core/class/Event");
class DataServicePredictHQ extends Service_1.DataServiceAbstract {
    constructor() {
        super(Call.axiosRequestPredictHQ);
        this.token = 'Bearer ' + process.env.API_TOKEN_PREDICTHQ;
        /**
         * Get concert about designed artist
         * @param artist Artist name
         * @returns Json about concerts
         */
        this.getConcerts = (artist) => __awaiter(this, void 0, void 0, function* () {
            let header = { 'Authorization': this.token, 'Accept': 'application/json' };
            return yield this.axiosService.get(`?q=${artist}&category=concerts`, { headers: header })
                .then(response => {
                var returnedValue = [];
                response.data.results.forEach((element) => {
                    returnedValue.push(new Event_1.Events(element));
                });
                return returnedValue;
            });
        });
    }
    getSearch(q, tos) {
        throw new Error('Method not implemented.');
    }
    getArtist(q) {
        throw new Error('Method not implemented.');
    }
    getAlbums(artistID) {
        throw new Error('Method not implemented.');
    }
    getTracks(albumId) {
        throw new Error('Method not implemented.');
    }
    getTrack(trackId) {
        throw new Error('Method not implemented.');
    }
}
exports.default = new DataServicePredictHQ();
