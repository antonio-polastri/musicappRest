import { AxiosInstance } from "axios";
import {typeOfSeachT} from "../config/options";
import { Album, Artist, Track, TrackDetail } from  './musicObject'


export interface DataService{

   
    getSearch(q:string,tos:string) :any;
    getArtist(q:string):Promise<Artist[]>;
    getAlbums(artistID :string):Promise<Album[]>;
    getTracks(albumId :string ) :Promise<Track[]>;
    getTrack(trackId : string):Promise<TrackDetail>;
    getBio(artistId : string):any;
    getConcerts(artistId : string):any;

}
 
export abstract class DataServiceAbstract implements DataService{
    
    protected token:string | undefined;
    protected aoikey:string | undefined;
    protected signature:string | undefined;
    
    constructor( protected axiosService: AxiosInstance){}
    
     
    abstract getSearch(q: string, tos: string) : any
    abstract getArtist(q: string): Promise<Artist[]>  
    abstract getAlbums(artistID: string): Promise<Album[]>  
    abstract getTracks(albumId: string): Promise<Track[]> 
    abstract  getTrack(trackId: string): Promise<TrackDetail>  
    getBio(artistId: string) {
        throw new Error("Method not implemented.");
    }
    getConcerts(artistId: string) {
        throw new Error("Method not implemented.");
    }
    getHotels(artistId: string) {
        throw new Error("Method not implemented.");
    }
    
}

class operationOnService extends DataServiceAbstract{

    constructor(axiosService: AxiosInstance,){
       super(axiosService);
   }

    getSearch(q: string, tos: string) {
        throw new Error("Method not implemented.");
    }
    getArtist(q: string): Promise<Artist[]> {
        throw new Error("Method not implemented.");
    }
    getAlbums(artistID: string): Promise<Album[]> {
        throw new Error("Method not implemented.");
    }
    getTracks(albumId: string): Promise<Track[]> {
        throw new Error("Method not implemented.");
    }
    getTrack(trackId: string): Promise<TrackDetail> {
        throw new Error("Method not implemented.");
    }





}