import { model, Schema } from "mongoose";

export type Origin  = "discogs" | "deezer" | "musicbrainz" | "itunes" | "lyricsovh" |"musixmatch"  | "lastfm" |"predicthq"; 


export interface Track{

    name : string;
    lenght : number;
    artist : string;
    id : string;
    origin : Origin;
    image : string;
    video : string;
    albumid : number;
    artistid : string;
    lyrics : string;
    master_url : string;
    released : string;
    notes: string;
    album_details : object;
    extraartist : string[];
    position : string;
    type : string;
    link? : string;


}

export interface TrackDetail{

    name : string;
    name_short : string;
    lenght : number;
    artist : Object;
    id : number;
    origin : Origin;
    image : string;
    video : string;
    albumid : number;
    artistid : string;
    lyrics : string;
    released : string;
    album_details : object;
    position : string;
    type : string;
    link? : string;
    preview?:string;


}

export interface Lyrics{

    
    id : string;
    origin : Origin;
    albumid : string;
    artistid : string;
    lyric : string;


}

export interface Album{

    name : string;
    lenght : number;
    artist : string;
    id : String;
    origin : Origin;
    image : string;
    video : string;
    date : string;
    release : string;
    artistid : string;
    tracks? : Track[];
    label : string;
    format : string;
    url : string;
    show : boolean;
 
} 
 export interface Artist{

    name : string;
    components? : number;
    id : String;
    origin : Origin;
    image : string;
    video? : string;
    descriptions? : string;
    albums? : Album[];
    show : boolean;
    
}
export interface Event{

    title : string;
    category : string;
    start: Date;
    end :Date;
    location : number[];
    country : string;
    id : string;
    origin : Origin;
    entities : {};
    timezone : string;
    
   

}



/**  Concrete class for album */
export abstract class AlbumAbstractClass implements Album{

    name!: string;
    lenght!: number;
    artist!: string;
    id!: String;
    origin!: Origin;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: string;
    tracks?: Track[] | undefined;
    label!: string;
    format!: string;
    url!: string;
    show:boolean = true;

    constructor(json : object,artistid? : any){
        this.initial(json);
    }
    
    protected abstract initial(json : object,artistid? : any):void;

}


/** Concrete class for artist */
export abstract class ArtistAbstractClass implements Artist{
 
  
    name!: string;
    components?: number | undefined;
    id!: String;
    origin!: Origin;
    image!: string;
    video?: string | undefined;
    descriptions?: string | undefined;
    albums?: Album[] | undefined;
    show:boolean = true;
    
    constructor(json : object){
        this.initial(json);
    }
    

    protected abstract initial(json : object):void;

}

/** Concrete class for track */
export abstract class TrackAbstractClass implements Track{
 
   
    
    name!: string;
    lenght!: number;
    artist!: string;
    id!: string;
    origin!: Origin;
    image!: string;
    video!: string;
    albumid!: number;
    artistid!: string;
    lyrics!: string;
    master_url!: string;
    released!: string;
    notes!: string;
    album_details!: object;
    extraartist!: string[];
    position!: string;
    type!: string;
    link?: string | undefined;
    show:boolean = true;
    

    constructor(json : object,i? : number){
        this.initial(json,i!);
    }

    protected abstract initial(json : object,i : number):void;

}



/** Concrete class for TrackDetail */
export abstract class TrackDetailAbstractClass implements TrackDetail{
  
    
    name!: string;
    name_short!: string;
    lenght!: number;
    artist!: Object;
    id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    albumid!: number;
    artistid!: string;
    lyrics!: string;
    released!: string;
    album_details!: object;
    position!: string;
    type!: string;
    link?: string | undefined;
    preview?: string | undefined;
    show:boolean = true;



    constructor(json : object){
        this.initial(json);
    }
    protected abstract initial(json : object):void;

}
 
/** Concrete class for Lyrics */
export abstract class LyricsAbstractClass implements Lyrics{
  
     
    id!: string;
    origin!: Origin;
    albumid!: string;
    artistid!: string;
    lyric!: string;
    show:boolean = true;
    
    constructor(json : object){
        this.initial(json);
    }
  
    protected abstract initial(json : object):void;

}

export abstract class EventAbstractClass implements Event{

    title!: string;
    category!: string;
    start!: Date;
    end!: Date;
    location!: number[];
    country!: string;
    id!: string;
    origin!: Origin;
    entities!: {};
    timezone!: string;
    show:boolean = true;

    
    constructor(json : object){
        this.initial(json);
    }
  
    protected abstract initial(json : object):void;
}