"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscogsServiceOperations = exports.ServOpAbstract = void 0;
const Artist_1 = require("../Artist");
class ServOpAbstract {
}
exports.ServOpAbstract = ServOpAbstract;
class DiscogsServiceOperations extends ServOpAbstract {
    constructor() {
        super();
    }
    parseArtist(axiosresponse) {
        var returnedValue = [];
        axiosresponse.results.forEach((element) => {
            returnedValue.push(new Artist_1.ArtistDiscogs(element));
        });
        return returnedValue;
    }
    parseAlbums() {
        throw new Error("Method not implemented.");
    }
}
exports.DiscogsServiceOperations = DiscogsServiceOperations;
