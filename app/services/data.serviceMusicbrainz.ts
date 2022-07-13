import axios, { AxiosInstance } from 'axios';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import * as TrackAdpt from './lib/core/class/Track'
import   { DataServiceAbstract }  from './lib/core/Service'; 
import  {typeOfSeachMusicb}  from './lib/config/options'; 
import { Artist, TrackDetail } from './lib/core/musicObject';
//https://github.com/Borewit/musicbrainz-api
//https://musicbrainz.org/doc/MusicBrainz_Entity

//la query potrebbe cambiare in base al tipo di dati raccolti

class DataServiceMusicbrainz extends  DataServiceAbstract{
   
   constructor(){
      
      super(Call.axiosRequestMB)
   }
   
   getSearch:any = async(q: string, tos: string):Promise<any>  =>{

      return await this.axiosService.get(`${typeOfSeachMusicb[tos as keyof typeof typeOfSeachMusicb]}?query=${q}`).then(
         response =>
          {
              
                switch(tos){

                         case 'artist' : 

                         var returnedValue : ArtistAdpt.ArtistMusicBrainz[] = [];
                         response.data.artists.forEach((element:any) => {
                            returnedValue.push(new ArtistAdpt.ArtistMusicBrainz(element));
                         });
                        // console.log(response.data);
                     
                         return  returnedValue;
                     

                        case 'track' : 

                         console.log(response.data)
                         let returnedValuet : TrackAdpt.TrackMusicBrainz[] = [];
                            console.log(response.data)
                              response.data.recordings.forEach((element : object) =>{
                                 returnedValuet.push(new TrackAdpt.TrackMusicBrainz(element));
                              })
                              
                              return returnedValuet; 
                          
                         
                        case 'album' : 

                        let returnedValuea : AlbumAdpt.AlbumMusicBrainz[] = [];
                        response.data.results.forEach((element: object) =>{
                
                            returnedValuea.push(new AlbumAdpt.AlbumMusicBrainz(element));
                
                        })
                       
                        return returnedValuea;
                        
                
                }
               }
       );

 }


   
   getTrack(trackId: string): Promise<TrackDetail> {
      throw new Error('Method not implemented.');
   }
   getBio(artistId: string) {
      throw new Error('Method not implemented.');
   }
    //get artist from research
     getArtist  = async (term : string):Promise<Artist[]> =>{
       
        return await this.axiosService.get('artist?query=' + term).then(response => 
         {
         var returnedValue : ArtistAdpt.ArtistMusicBrainz[] = [];

         
         response.data.artists.forEach((element:any) => {
            returnedValue.push(new ArtistAdpt.ArtistMusicBrainz(element));

         });
        // console.log(response.data);
     
         return  returnedValue;
     
      }
      );
       

     } 

     getArtistDetails = async (params: string) => {
        
      //https://musicbrainz.org/ws/2/artist/f90e8b26-9e52-4669-a5c9-e28529c47894
         return await this.axiosService.get('artist?query=' + params).then(response => response.data);

     }
   getReleaseCredits = async(releaseId : string) =>{

   //   https://musicbrainz.org/ws/2/release/ff049656-0f4a-4126-bf1e-32597cd6a05b?inc=artist-credits
 
     }

     //get albums details
     getAlbums  = async (id : string)=>{
        console.log(`release-group?artist=${id}&type=album|ep`)
        //A release group, just as the name suggests, is used to group several different releases into a single logical entity. Every release belongs to one, and only one release group.
 //https://musicbrainz.org/ws/2/release-group?artist=3bf74908-e8b3-4158-8fae-4fd795bb4474&type=album|ep
      //return await this.axiosService.get(`artist/${id}/?inc=releases`).then(response => response.data);

      
      return await this.axiosService.get(`release?artist=${id}&type=album|ep&&fmt=json`).then(response =>{ 
         //console.log(response.data);
         var returnedValue : AlbumAdpt.AlbumMusicBrainz[] = [];
         response.data.releases.forEach((element:any) => {
            returnedValue.push(new AlbumAdpt.AlbumMusicBrainz(element));
         });
        
     
         return  returnedValue;
     
      
      });
     
   } 
   //get tracks details
   getTracks  = async (id : string)=>{
 
      return await this.axiosService.get(`release/${id}/?inc=artist-credits+labels+recordings+recording-level-rels+work-rels+work-level-rels+artist-rels`).then((response) =>{

         var returnedValue : TrackAdpt.TrackMusicBrainz[] = [];
        // console.log(response.data)
         response.data.media[0].tracks.forEach((element:any) => {
            returnedValue.push(new TrackAdpt.TrackMusicBrainz(element));
         });
        
     
         return  returnedValue;
      } );

   } 

}

export default new DataServiceMusicbrainz();