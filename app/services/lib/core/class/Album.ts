import {Album, Track,Origin, AlbumAbstractClass} from '../musicObject';

export class AlbumDeezer extends AlbumAbstractClass{

    protected initial(json: any,artistid? : any): void {

         this.origin= "deezer";
       // console.log(json)
       this.name = json.title;
       this.date = json.release_date;
       this.id = json.id;
       this.image = json.cover_medium;
       this.url = json.link;
       this.artistid! = json.artistid;
    }

    
}
export class AlbumDiscogs extends AlbumAbstractClass{

    protected initial(json: any,artistid? : any): void {

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
    }

    
}


export class AlbumItunes extends AlbumAbstractClass{

    protected initial(json: any,artistid? : any): void {
   
        this.origin= "itunes";
    
}

}

export class AlbumMusicBrainz extends AlbumAbstractClass{

    protected initial(json: any,artistid? : any): void {
   
        this.origin= "musicbrainz";
        this.name = json.title;
        this.id = json.id;
        this.date = json.date;
        this.artistid! = artistid;
    
}
}
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