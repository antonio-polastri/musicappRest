import dataServiceDeezer from "../../../data.serviceDeezer";
import dataServiceDiscogs from "../../../data.serviceDiscogs";
import dataServiceItues from "../../../data.serviceItues";
import dataServiceMusicbrainz from "../../../data.serviceMusicbrainz";
import { Origin } from "../musicObject";
import {DataService} from "../Service";


interface getOrigin{

    getOrigin(origin : Origin): DataService
}

export class DeterminateOrigin implements getOrigin{
     

    getOrigin(origin: Origin): DataService {
        
        let service! : DataService ;

        switch(origin){

                    case "deezer":
                        service = dataServiceDeezer
                        break;
                    case "discogs":
                        service = dataServiceDiscogs
                        break;
                    case "itunes":
                        service = dataServiceItues
                        break;
                    /*case "lyricsovh":
                        this.service = dataserv
                        break;*/
                    case "musicbrainz":
                        service = dataServiceMusicbrainz
                        break;
                  /*  case "musixmatch":
                        this.service = dataServiceMusicxMatch
                        break;*/
                    default:
                         
                        break;
                    
               }
               return service
    }

    
}
   