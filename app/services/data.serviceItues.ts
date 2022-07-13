import axios, { AxiosInstance } from 'axios';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import * as TrackAdpt from './lib/core/class/Track'
import   { DataServiceAbstract }  from './lib/core/Service'; 
 
import { Artist, Track, TrackDetail } from './lib/core/musicObject';
 


class DataServiceItunes extends  DataServiceAbstract{
   
    constructor(){
       
       super(Call.axiosRequestItunes)
    }
 

    getSearch(q: string, tos: string) {
        throw new Error('Method not implemented.');
    }
    getArtist(q: string): Promise<Artist[]> {
        throw new Error('Method not implemented.');
    }
    getTracks(albumId: string): Promise<Track[]> {
        throw new Error('Method not implemented.');
    }
    getTrack(trackId: string): Promise<TrackDetail> {
        throw new Error('Method not implemented.');
    }
    getBio(artistId: string) {
        throw new Error('Method not implemented.');
    }

    //necessario costruire la query per la rischiesta
     getAlbums = async (term : string)=>{
 
         return await Call.axiosRequestItunes.get('type=musicArtist&term=' + term).then(response => response.data);
        

      }

    getAutor  = async (term : string)=>{
 
        return await this.axiosService.get('type=musicArtist&entity=album&term=' + term).then(response => response.data);
       

     } 

   

}

export default new DataServiceItunes();