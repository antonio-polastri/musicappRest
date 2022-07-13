"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumMusicBrainz = exports.AlbumItunes = exports.AlbumDiscogs = exports.AlbumDeezer = void 0;
const musicObject_1 = require("../musicObject");
class AlbumDeezer extends musicObject_1.AlbumAbstractClass {
    initial(json, artistid) {
        this.origin = "deezer";
        // console.log(json)
        this.name = json.title;
        this.date = json.release_date;
        this.id = json.id;
        this.image = json.cover_medium;
        this.url = json.link;
        this.artistid = json.artistid;
    }
}
exports.AlbumDeezer = AlbumDeezer;
class AlbumDiscogs extends musicObject_1.AlbumAbstractClass {
    initial(json, artistid) {
        //console.log(json)
        this.origin = "discogs";
        //da verificare
        this.id = (json.main_release == null) && json.id;
        this.name = json.title;
        this.image = '';
        this.label = json.label;
        this.lenght = 0;
        this.date = json.year;
        this.format = json.format;
        this.release = json.release;
        this.artist = json.artist;
        this.url = json.resource_url;
        this.artistid = artistid;
    }
}
exports.AlbumDiscogs = AlbumDiscogs;
class AlbumItunes extends musicObject_1.AlbumAbstractClass {
    initial(json, artistid) {
        this.origin = "itunes";
    }
}
exports.AlbumItunes = AlbumItunes;
class AlbumMusicBrainz extends musicObject_1.AlbumAbstractClass {
    initial(json, artistid) {
        this.origin = "musicbrainz";
        this.name = json.title;
        this.id = json.id;
        this.date = json.date;
        this.artistid = artistid;
    }
}
exports.AlbumMusicBrainz = AlbumMusicBrainz;
/*
export class AlbumDiscogs implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: string;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: string;
    tracks!: Track[];
    origin: Origin;
    label! : string;
    format! : string;
    url! : string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any,artistid? : any){

        //console.log(json)
        this.origin= "discogs";
        //da verificare
        this.id = (json.main_release == null) && json.id;
        this.name = json.title;
        this.image = '';
        this.label = json.label;
        this.lenght = 0;
        this.date = json.year;
        this.format = json.format;
        this.release = json.release;
        this.artist = json.artist;
        this.url = json.resource_url;
        this.artistid! = artistid;

        
        //elaborate json
    }
    

}

export class AlbumItunes implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: string;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: string
    tracks!: Track[];
    origin: Origin;
    label!: string;
    format!: string;
    url!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object,artistid : any){
        this.origin= "itunes";
        //elaborate json
    }
   
     


}

export class AlbumMusicBrainz implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: string;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: string;
    tracks!: Track[];
    origin: Origin;
    label!: string;
    format!: string;
    url!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any,artistid? : any){
        this.origin= "musicbrainz";
        this.name = json.title;
        this.id = json.id;
        this.date = json.date;
        this.artistid! = artistid;


        //elaborate json
    }
     
     


}*/ 
