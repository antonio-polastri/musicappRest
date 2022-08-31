import * as Call from './lib/config/api';
import  {typeOfSeach,typeOfSeachDeezen,typeOfSeachDez}  from './lib/config/options'; 
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import * as TrackAdpt from './lib/core/class/Track'
 
import * as TrackDetailsAdpt from './lib/core/class/TrackDetailsAdpt'
import  { DataServiceAbstract }  from './lib/core/Service'; 
import { Album, Artist, Track, TrackDetail } from './lib/core/musicObject';
import { AlbumDeezer } from './lib/core/class/Album';
import { AxiosInstance } from 'axios';
 

class DataServiceLastFM extends DataServiceAbstract{

   token ='&api_key='+process.env.API_TOKEN_LASTFM;

   constructor(){
      
      super(Call.axiosRequestLastFM)
   }
   getBio = async(artist: string)=> {

      return await this.axiosService.get(`?method=artist.getinfo&artist=${artist}${this.token}&format=json`)
      .then(response=>{
       
         return response.data;
         }
      )
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
   
 

   
   
}

export default new DataServiceLastFM();