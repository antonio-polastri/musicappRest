import * as Call from './lib/config/api';
import  {typeOfSeach,typeOfSeachDeezen,typeOfSeachDez}  from './lib/config/options'; 
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import * as TrackAdpt from './lib/core/class/Track'
 
import * as TrackDetailsAdpt from './lib/core/class/TrackDetailsAdpt'
import  { DataServiceAbstract }  from './lib/core/Service'; 
import { Artist } from './lib/core/musicObject';
import { AlbumDeezer } from './lib/core/class/Album';
import { AxiosInstance } from 'axios';
 

class DataServiceDeezer extends DataServiceAbstract{
   
   constructor(){
      
      super(Call.axiosRequestDeezer)
   }
  
    getSearch  = async(q:string,tos:string) :Promise<any> =>{
       
         return await this.axiosService.get(`/search/${typeOfSeachDez[tos as keyof typeof typeOfSeachDez]}/?q="${q}"&output=json`).then(
            response =>
             {
                
                   switch(tos){
 
                            case 'artist' : 
 
                                  let returnedValue : ArtistAdpt.ArtistDeezer[] = [];
 
                                  response.data.data.forEach( (element:any) => {
                                     
                                     returnedValue.push(new ArtistAdpt.ArtistDeezer(element));
                            
                                  });
                                  
                                  return returnedValue; 

                           case 'track' : 

                              let returnedValuet : TrackAdpt.TrackDeezer[] = [];
                              let i = 0;
                              response.data.data.forEach((track : any) => {
                                 i++;
                  
                              returnedValuet.push(new TrackAdpt.TrackDeezer(track,i));
                           })
                          
                           return returnedValuet;
                                 
                           
                           case 'album' : 

                                let returnedValuea : AlbumAdpt.AlbumDeezer[] = [];
     
                                 response.data.data.forEach( (element:any) => {
                                    
                                    returnedValuea.push(new AlbumAdpt.AlbumDeezer(element));
                                 });
                              
                                 return returnedValuea;
                           
                   
                   }
                  }
          );

    }

    getArtist = async(q:string): Promise<Artist[]> =>{
    

        return await this.axiosService.get(`/search/artist/?q=${q}&output=json`).then(response => 
          {  
            
              var returnedValue : ArtistAdpt.ArtistDeezer[] = [];

            response.data.data.forEach( (element:any) => {
               
               returnedValue.push(new ArtistAdpt.ArtistDeezer(element));
            });
          
            return returnedValue; 


           });

    }
    getAlbums = async(artistID :string) =>{
      //the solutions is a proxy server tht repay the request
     
             return await this.axiosService.get(`/artist/${artistID}/albums`).then(response => 
               {   
                 // console.log(response.data)

                var returnedValue : AlbumDeezer[] = [];
     
                 response.data.data.forEach( (element:any) => {
                    
                    returnedValue.push(new AlbumDeezer(element,artistID ));
                 });
               
                 return returnedValue;
                });
     
         }
 
   getTracks = async(albumId :string ) => {

     
     return await this.axiosService.get(`/album/${albumId}`).then(response =>
      {
     
         let returnedValue : TrackAdpt.TrackDeezer[] = [];
         let i = 0;
         response.data.tracks.data.forEach((track : any) => {
            i++;

            returnedValue.push(new TrackAdpt.TrackDeezer(track,i));
         })
        // console.log(returnedValue);
         return returnedValue;


      
      });


    }
   //get single track data, specific for deezen
   getTrack = async(trackId : string) =>{
     
      return await this.axiosService.get(`/track/${trackId}`).then((response)=>{
          let a = new TrackDetailsAdpt.TrackDetailDeezer (response.data);
          console.log(a)
         return a;
 
      });

   }
   
   
   getBio = async(artistId : string) => {

    return null;//await this.axiosService.get(`/artists/${artistId}`).then(response => response.data);

    } 

}

export default new DataServiceDeezer();