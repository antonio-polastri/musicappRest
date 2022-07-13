import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/class/Album'
import * as ArtistAdpt from './lib/core/class/Artist'
import * as TrackAdpt from './lib/core/class/TrackAdpt'
 

class DataServiceWikiPage {


     getBio = async (artist : string) =>{
             
     let artistexplosed:string =  artist.replace(' ','%20');

      return await fetchJsonp(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&titles=${artistexplosed}&rvprop=content&rvsection=0&rvparse` )
          .then(function(response) {
            return response.json()
          })/*.then(function(json) {
            console.log('parsed json', json)
          })*/.catch(function(ex) {
            console.log('parsing failed', ex)
          });
      }

    //necessario costruire la query per la rischiesta
    getArtist = async (artist : string )=>{
        
         let artistexplosed:string =  artist.replace(' ','%20');

        // return await Call.axiosWiki.get(`/${artistexplosed}`).then(response => response.data);
         return await Call.axiosWiki.get(`api.php?format=json&action=query&prop=revisions&titles=${artistexplosed}&rvprop=content&rvsection=0&rvparse`).then(response => response.data);
         
//https://en.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=radiohead&rvprop=content&rvsection=0&rvparse
      }
     
      //problema JSON --> JSONP CROSS ORIGIN PROBLEM RISOLVE

}

export default new DataServiceWikiPage();