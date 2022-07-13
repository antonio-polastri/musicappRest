import dataServiceDeezer from '../../../data.serviceDeezer';
import dataServiceDiscogs from '../../../data.serviceDiscogs';
import dataServiceItues from '../../../data.serviceItues';
import dataServiceMusicbrainz from '../../../data.serviceMusicbrainz';
import {typeOfSeachDeezen, typeOfSeachDez} from '../../config/options';
import { Album, Artist, Origin, Track, TrackDetail } from '../musicObject';
import {DataService} from '../Service';
/* DI of services */
export class ServiceWrapper implements DataService{

        private service : DataService;

        constructor(service : DataService){
            this.service = service;
        }
         
        getAlbum(id : string):Promise<Album[]>{

            return this.service.getAlbums(id);           
        }

        getSearch(q:string,tos:string) :any{

            //return different type based on serach

            return this.service.getSearch(q,tos);



        }

        getArtist(q:string):Promise<Artist[]>{

            return this.service.getArtist(q);
        }

        getAlbums(artistID :string):Promise<Album[]>{

            return this.service.getAlbums(artistID);

        }

        getTracks(albumId :string ) :Promise<Track[]>{

            return this.service.getTracks(albumId);

        }

        getTrack(trackId : string):Promise<TrackDetail>{

            return this.service.getTrack(trackId);

        }

        getBio(artistId : string):any{

            return this.service.getBio(artistId);

        }
}

