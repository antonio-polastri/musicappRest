"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeterminateOrigin = void 0;
const data_serviceDeezer_1 = __importDefault(require("../../../data.serviceDeezer"));
const data_serviceDiscogs_1 = __importDefault(require("../../../data.serviceDiscogs"));
const data_serviceItues_1 = __importDefault(require("../../../data.serviceItues"));
const data_serviceMusicbrainz_1 = __importDefault(require("../../../data.serviceMusicbrainz"));
class DeterminateOrigin {
    getOrigin(origin) {
        let service;
        switch (origin) {
            case "deezer":
                service = data_serviceDeezer_1.default;
                break;
            case "discogs":
                service = data_serviceDiscogs_1.default;
                break;
            case "itunes":
                service = data_serviceItues_1.default;
                break;
            /*case "lyricsovh":
                this.service = dataserv
                break;*/
            case "musicbrainz":
                service = data_serviceMusicbrainz_1.default;
                break;
            /*  case "musixmatch":
                  this.service = dataServiceMusicxMatch
                  break;*/
            default:
                break;
        }
        return service;
    }
}
exports.DeterminateOrigin = DeterminateOrigin;
