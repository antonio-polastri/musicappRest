"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceWrapper = void 0;
/* DI of services */
class ServiceWrapper {
    constructor(service) {
        this.service = service;
    }
    getAlbum(id) {
        return this.service.getAlbums(id);
    }
    getSearch(q, tos) {
        //return different type based on serach
        return this.service.getSearch(q, tos);
    }
    getArtist(q) {
        return this.service.getArtist(q);
    }
    getAlbums(artistID) {
        return this.service.getAlbums(artistID);
    }
    getTracks(albumId) {
        return this.service.getTracks(albumId);
    }
    getTrack(trackId) {
        return this.service.getTrack(trackId);
    }
    getBio(artistId) {
        return this.service.getBio(artistId);
    }
    getConcerts(artist) {
        return this.service.getConcerts(artist);
    }
    getHotels(artist) {
        return this.service.getHotels(artist);
    }
}
exports.ServiceWrapper = ServiceWrapper;
