import axios, { AxiosInstance } from 'axios';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import * as TrackAdpt from './lib/core/class/Track'
import   { DataServiceAbstract }  from './lib/core/Service'; 
import { Album, Artist, Track, TrackDetail } from './lib/core/musicObject';
 
 


//https://api.musixmatch.com/ws/1.1

const APIKEY='&apikey=892d0f3bd3be69049533153cecd73702';

class DataServiceMusicxMatch extends  DataServiceAbstract{
   
   constructor(){
      
      super(Call.axiosRequestItunes)
   }
   getSearch(q: string, tos: string) {
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



   //get artist from research
     getArtist  = async (term : string)  =>{
      
      //  return await this.axiosService.get('artist?query=' + term).then(response => response.data);
       return    Array<Artist>();
      
     } 

     getArtistDetails = async (params: string) => {
        
       //  return await this.axiosService.get('artist?query=' + params).then(response => response.data);

     }


     getReleaseCredits = async(releaseId : string) =>{

   

     }

     //get albums details
     getAlbums  = async (id : string)=>{
     
      return    Array<Album>();
  //    return await this.axiosService.get(`release?artist=${id}&type=album|ep`).then(response => response.data);
     

   } 
   //ex  https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=88835325&apikey=892d0f3bd3be69049533153cecd73702

   getLyrics  = async (id : string)=>{
      
      return await this.axiosService.get(`track.lyrics.get?track_id=${id}${APIKEY}`).then((response) => {
         
         if(response.data.message.header['status_code'] === 200  ){
            return response.data.message.body.lyrics['lyrics_body']
         }else return '';
        
         
      
      });

   } 
   //ex  https://api.musixmatch.com/ws/1.1/track.search?q_artist=jamiroquai&q_track=to die&page_size=1&page=1&s_track_rating=desc&apikey=892d0f3bd3be69049533153cecd73702

   getTrackFromLists = async(artistName :string, trackName: string) =>{

      try {
         console.log(artistName);
         console.log(trackName);
         return await this.axiosService.get(`track.search?q_artist=${artistName}&q_track=${trackName}&page_size=1&page=1&s_track_rating=desc${APIKEY}`).then(
            (response) =>{ 
             //   console.log(response.data);
            //  alert(response.data.message.header['status_code']);
               if(response.data.message.header['status_code'] === 200  ){
               //   console.log(response.data)
               let trackId = response.data.message.body['track_list'][0].track['track_id'];
              // alert(response.data.message.body )
               let lyrics =   this.getLyrics(trackId);
               
               return   lyrics 
            }else{
                  return null;
               };
            })

      } catch (error) {
         
      }
   }
   
}

export default new DataServiceMusicxMatch();