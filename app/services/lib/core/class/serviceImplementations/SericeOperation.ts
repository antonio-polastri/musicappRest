import { Album, Artist } from "../../musicObject";
import { ArtistDiscogs } from "../Artist";

export interface ServiceOperations{


    parseArtist(AxiosResponse: any):Array<Artist>;
    parseAlbums(AxiosResponse: any):Array<Album>;
}
export abstract class ServOpAbstract implements ServiceOperations{

    protected token : string | undefined ;
    protected artistPath : string | undefined;
    protected albumPath : string | undefined;
    protected trackPath : string | undefined;

    abstract parseArtist(axiosresponse: any): Artist[]  
    abstract parseAlbums():Album[] 



    
}

export  class DiscogsServiceOperations extends ServOpAbstract{
   

 

    constructor(){
        super();
       
    }


    parseArtist(axiosresponse: any): Artist[] {

        var returnedValue :  ArtistDiscogs[] = [];

        axiosresponse.results.forEach( (element:any) => {
           
           returnedValue.push(new ArtistDiscogs(element));

        });
       
        return returnedValue;
    }

    parseAlbums(): Album[] {

        throw new Error("Method not implemented.");
        
    }


    
}

