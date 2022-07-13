import { threadId } from 'worker_threads';
import { Track,Origin, TrackAbstractClass} from '../musicObject';
 

export class TrackDeezer extends TrackAbstractClass{
     

    protected initial(json: any,i : number): void {
        this.origin= "deezer";
       // console.log(i);
        this.id =  json.id;
        this.name = json.title_short;
        this.lenght = json.duration;
        this.link = json.link;
        this.position = String(i);
    }
     

}
 
export class TrackDiscogs implements Track{
    
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
    album_detail!: object;
    extraartist!:string[];
    album_details!: object; 
    position!: string;
    type! : string;

    constructor(track:any ,json : any){
        this.origin= "discogs";
        this.name = track.title;
        this.lenght = parseInt(track.duration);
        this.artist = json.artists_sort;
        this.id = '0';
        this.image = '';
        this.video = '';
        this.albumid = json.masterid;
        this.artistid = '';
        this.lyrics ='';
        this.master_url = json.master_url;
        this.released = json.released;
        this.notes = json.notes;
        this.position = track.position;
        this.type = track.track;
        
    }
     
     
}

export class TrackItunes extends TrackAbstractClass{
     

    protected initial(json: any): void {

    
        this.origin= "itunes";
    }
     

}

export class TrackMusicBrainz   extends TrackAbstractClass{
     

    protected initial(json: any): void {
        this.origin= "musicbrainz";
      //  console.log(json);
        this.id = json.id;
        this.name = json.title;
        this.lenght = json.length;
        this.position = json.position;
        let ext = this.extraartist =  json['artist-credit'];
        if(  ext ) {  this.artistid = ext[0].artist.id  
        this.artist = ext[0].artist.name}
        
    }
      

}