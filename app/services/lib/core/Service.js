"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataServiceAbstract = void 0;
class DataServiceAbstract {
    constructor(axiosService) {
        this.axiosService = axiosService;
    }
    getBio(artistId) {
        throw new Error("Method not implemented.");
    }
    getConcerts(artistId) {
        throw new Error("Method not implemented.");
    }
    getHotels(artistId) {
        throw new Error("Method not implemented.");
    }
}
exports.DataServiceAbstract = DataServiceAbstract;
class operationOnService extends DataServiceAbstract {
    constructor(axiosService) {
        super(axiosService);
    }
    getSearch(q, tos) {
        throw new Error("Method not implemented.");
    }
    getArtist(q) {
        throw new Error("Method not implemented.");
    }
    getAlbums(artistID) {
        throw new Error("Method not implemented.");
    }
    getTracks(albumId) {
        throw new Error("Method not implemented.");
    }
    getTrack(trackId) {
        throw new Error("Method not implemented.");
    }
}
