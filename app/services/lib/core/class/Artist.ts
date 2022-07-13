import {Album,Artist,ArtistAbstractClass,Origin} from '../musicObject';
  
export class ArtistDeezer extends ArtistAbstractClass{
 
    protected initial(json: any): void {
        this.origin= "deezer";
        //  console.log(json);
          this.name = json.name;
          this.components = 0;
          this.id = json.id;
          this.image = json.picture;
    }
     

}


export class ArtistDiscogs  extends ArtistAbstractClass{
 
    protected initial(json: any): void {
       // console.log(json);
        this.origin= "discogs";
        this.name = json.title;
        this.components = 0;
        this.id = json.id ;
        this.image= json.thumb;
        this.video = '';
        this.descriptions = '';
        this.albums = [];
    }
    
}

export class ArtistItunes  extends ArtistAbstractClass{


    
    protected initial(json: any): void {
        this.origin= "itunes";
    }
   

}

export class ArtistMusicBrainz  extends ArtistAbstractClass{


    
    protected initial(json: any): void {
        console.log(json)
        this.origin= "musicbrainz";
        this.id = json.id;
        this.name = json.name;
        this.descriptions = json.disambiguation;
    }
  
    

}