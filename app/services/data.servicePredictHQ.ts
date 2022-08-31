import * as Call from './lib/config/api';
import  {  typeOfSeachDiscogs } from './lib/config/options';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import  { DataServiceAbstract } from './lib/core/Service';
import * as TrackAdpt from './lib/core/class/Track'
import { Album, Artist, Track, TrackDetail } from './lib/core/musicObject';
import { AxiosInstance,AxiosRequestHeaders} from 'axios';
import { Events } from './lib/core/class/Event';
  
 

class DataServicePredictHQ extends DataServiceAbstract{

    token ='Bearer '+process.env.API_TOKEN_PREDICTHQ; 

    constructor(){
       
       super(Call.axiosRequestPredictHQ)
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

    getConcerts = async (artist: string) =>{
        let header :AxiosRequestHeaders = {'Authorization' : this.token,'Accept' : 'application/json'};
        return   await this.axiosService.get(`?q=${artist}&category=concerts`,{headers:header})
        .then(response =>{

            var returnedValue : Events[] = [];

            response.data.results.forEach( (element:any) => {
               
               returnedValue.push(new Events(element));
            });
           
            return returnedValue;
        })
    } 
}

export default new DataServicePredictHQ();