import * as Call from './lib/config/api';
import  {  typeOfSeachDiscogs } from './lib/config/options';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import  { DataServiceAbstract } from './lib/core/Service';
import * as TrackAdpt from './lib/core/class/Track'
import { TrackDetail } from './lib/core/musicObject';
import { AxiosInstance } from 'axios';



class DataServiceDiscogs extends DataServiceAbstract{
   
     token = '&token='+process.env.API_TOKEN_DISCOGS;

    constructor(){
       
       super(Call.axiosRequestDS)
    }
   
    getSearch  = async(q:string,tos:string) :Promise<any> =>{
  
        return await this.axiosService.get(`database/search?q=${q}&type=${typeOfSeachDiscogs[tos as keyof typeof typeOfSeachDiscogs]}${this.token} `).then(
           response =>
            {
                
                  switch(tos){

                           case 'artist' : 

                           var returnedValue : ArtistAdpt.ArtistDiscogs[] = [];

                           response.data.results.forEach( (element:any) => {

                               if(element.type=='artist') 
                               
                                     returnedValue.push(new ArtistAdpt.ArtistDiscogs(element));
                           });
                           
                           return returnedValue; 

                          case 'track' : 

                           
                            let returnedValuet : TrackAdpt.TrackDiscogs[] = [];
                            // console.log(response.data)
                                response.data.results.forEach((element : object) =>{
                                    returnedValuet.push(new TrackAdpt.TrackDiscogs(element,response.data));
                                })
 
                                return returnedValuet; 
                           
                                
                          
                          case 'album' : 

                          let returnedValuea : AlbumAdpt.AlbumDiscogs[] = [];
                          response.data.results.forEach((element: any) =>{
                            console.log(element)
                            if(element.type=='release')
                              returnedValuea.push(new AlbumAdpt.AlbumDiscogs(element));
                  
                          })
                         
                          return returnedValuea;
                          
                  
                  }
                 }
         );

   }


    getTrack(trackId: string): Promise<TrackDetail> {
        throw new Error('Method not implemented.');
    }

  
  
    getArtist = async(q : string) => {
 
        let searcStr = `database/search?q=${q}&type=artist${this.token}`;
        
        return await this.axiosService
        .get(searcStr)
        .then(response =>{

            var returnedValue : ArtistAdpt.ArtistDiscogs[] = [];

            response.data.results.forEach( (element:any) => {
               
               returnedValue.push(new ArtistAdpt.ArtistDiscogs(element));
            });
           
            return returnedValue;
        });
 
    }
    
    getAlbums = async(artistid : string) => {

      let searcStr = `/artists/${artistid}/releases?page=1&per_page=400&sort=year&sort_order=asc`;
        
      //resolve pagination problems
      return await this.axiosService
      .get(searcStr)
      .then(response =>{ 
        
        let returnedValue : AlbumAdpt.AlbumDiscogs[] = [];
        response.data.releases.forEach((element: object) =>{

            returnedValue.push(new AlbumAdpt.AlbumDiscogs(element,artistid));

        })
       
        return returnedValue;
    
        
    });


  } 

  getTracks = async(releaseId : string) => {

    let searcStr = `/releases/${releaseId}`;
     return await this.axiosService.get(searcStr).then(response => {
         
        let returnedValue : TrackAdpt.TrackDiscogs[] = [];
       
        response.data.tracklist.forEach((element : object) =>{
            returnedValue.push(new TrackAdpt.TrackDiscogs(element,response.data));
        })

        return returnedValue});


    }
    getBio = async(artistId : string) => {

        let searcStr = `/artists/${artistId}`;
        return await this.axiosService.get(searcStr).then(response => response.data);


    }

}

export default new DataServiceDiscogs();