import { Schema, model } from "mongoose";
import { Album, Artist, Lyrics, Track } from "../services/lib/core/musicObject";

//mongoose schema ad models
const artistSchema = new Schema<Artist>({

    name: { type: String, required: true },
    components  : { type: Number, required: false },
    id : { type: String, required: true ,index:true },
    origin :  { type: String, required: true,index:true  },
    image : { type: String, required: false },
    video :{ type: String, required: false },
    descriptions :{ type: String, required: false },
    albums : { type: Array, required: false },
    show : { type: Boolean  ,default:true } ,
  });

  artistSchema.index({id: 1, origin: 1}, {unique: true});


const searchSchema = new Schema(
    {
    query :{type :String, required : true,  unique: true },
    count :{type: Number, required : true} ,
    searchType : {type :String , required  : true}    
    },

    {
        timestamps: true
    }
) 
  
  const albumSchema = new Schema<Album>({

    name: { type: String, required: true },
    lenght : { type: Number, required: false },
    artist : { type: String, required: false } ,
    id : { type: String, required: true ,index:true },
    origin :  { type: String, required: true,index:true  },
    image :  { type: String, required: false },
    video :  { type: String, required: false },
    date :  { type: String, required: false },
    release : { type: String, required: false },
    artistid :  { type: String, required: false },
    tracks : { type: Array, required: false },
    label :  { type: String, required: false },
    format :  { type: String, required: false },
    url :  { type: String, required: false },
 
 
});

albumSchema.index({id: 1, origin: 1}, {unique: true});
 



const trackSchema = new Schema<Track>({

    name: { type: String, required: true },
    lenght : { type: Number, required: false },
    artist : { type: String, required: false } ,
    id : { type: String, required: true ,index:true },
    origin :  { type: String, required: true,index:true  },
    image :  { type: String, required: false },
    video :  { type: String, required: false },
    albumid : { type: Number, required: false },
    artistid : { type: String, required: false },
    lyrics :  { type: String, required: false },
    master_url :  { type: String, required: false },
    released :  { type: String, required: false },
    notes:  { type: String, required: false },
    album_details : { type: String, required: false },
    
    position : { type: String, required: false },
    type :{ type: String, required: false },
    link :{ type: String, required: false },


})
trackSchema.index({id: 1, origin: 1}, {unique: true});
/*
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
    artistid : number;
    lyrics : string;
    released : string;
    album_details : object;
    position : string;
    type : string;
    link? : string;
    preview?:string;


}*/
const lyricSchema = new Schema<Lyrics>({

    
    id : { type: String, required: true ,index:true },
    origin : { type: String, required: true,index:true  },
    albumid : { type: String, required: false },
    artistid : { type: String, required: false },
    lyric :  { type: String, required: false }


})


export const albumModel = model<Album>('Album', albumSchema);
export const searchModel = model('Search', searchSchema);
export const artistModel = model<Artist>('Artist', artistSchema);
export const trackModel = model<Track>('Track', trackSchema);
export const lyricModel = model<Lyrics>('Lyric', lyricSchema);

//operation on mongo dbs
export class mongoOperations {



}
