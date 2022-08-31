import * as Call from './lib/config/api';
import  {  typeOfSeachDiscogs } from './lib/config/options';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import  { DataServiceAbstract } from './lib/core/Service';
import * as TrackAdpt from './lib/core/class/Track'
import { Album, Artist, Track, TrackDetail } from './lib/core/musicObject';
import { AxiosInstance,AxiosRequestHeaders} from 'axios';
//import { Events } from './lib/core/class/Event';
  
 

class DataServiceHotelBed extends DataServiceAbstract{

    cripto ;
    signature:string | undefined ;
    apikey  = process.env.API_HOTELBEDS_TEST!; 
    //signature = (`${process.env.API_HOTELBEDS_TEST}${process.env.API_HOTELBEDS_SECRET_TEST}${new Date().getTime()}`)  
   // signature = this.cripto.createHash('sha256').update((`${process.env.API_HOTELBEDS_TEST}${process.env.API_HOTELBEDS_SECRET_TEST}${new Date().getTime()}`) ).digest('base64');
    constructor(){
      
       super(Call.axiosRequestHotelBeds)
       this.cripto = require("crypto");
      
       console.log( this.signature)
    }

    getSearch(q: string, tos: string) {
        throw new Error('Method not implemented.');
    }
    getArtist(q: string): Promise<Artist[]> {
        throw new Error('Method not implemented.');
    }
    getAlbums(artistID: string): Promise<Album[]> {
        throw new Error('Method not implemented.');
    }
    getTracks(albumId: string): Promise<Track[]> {
        throw new Error('Method not implemented.');
    }
    getTrack(trackId: string): Promise<TrackDetail> {
        throw new Error('Method not implemented.');
    }
   /**
    * Get concert about designed artist
    * @param artist Artist name
    * @returns Json about concerts
    */

    getHotels = async (location: string) =>{
        
            this.signature = this.cripto.createHash('sha256').update((`${process.env.API_HOTELBEDS_TEST}${process.env.API_HOTELBEDS_SECRET_TEST}${Math.round(Date.now() / 1000)}`)).digest('hex');
         
            let header :AxiosRequestHeaders = {'X-Signature' : this.signature, 'Accept' : 'application/json', 'Api-key': this.apikey};

             return   await this.axiosService.get(`status`,{headers:header})

                .then(response =>{

                   
                    return response.data;
                    
                })
    
            } 
}

export default new DataServiceHotelBed();