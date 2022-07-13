import axios from "axios";
//https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
export const axiosRequestItunes = axios.create({
    baseURL: "https://itunes.apple.com/search?media=music&  "
});

//https://musicbrainz.org/doc/MusicBrainz_API
export const axiosRequestMB = axios.create({
    baseURL: "https://musicbrainz.org/ws/2/",
    headers: {
      Accept : 'application/json'
      }
  });

//https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
export const axiosLyrics = axios.create({
    baseURL: "https://api.lyrics.ovh/v1/"
  });

 
export const axiosWiki = axios.create({
  
  //baseURL: "https://en.wikipedia.org/w/rest.php/v1/page/"
  baseURL: "https://en.wikipedia.org/w/",
  headers:{
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin' :'*',
    //'Origin':'https://antoniopolastri.com',
    'Access-Control-Allow-Credentials': 'false',
   //'Access-Control-Allow-Origin': 'localhost:3000'
  }
});

/*  export const axiosWikiJsonp = fetchJsonp('/users.jsonp', {
    jsonpCallbackFunction: 'function_name_of_jsonp_response'
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });*/

  //https://www.discogs.com/developers/#page:database,header:database-search
export const axiosRequestDS = axios.create({
  baseURL: "https://api.discogs.com/",
  headers: {
    Accept : 'application/json',
    'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
    }
});

export const axiosRequestDeezer= axios.create({
  baseURL: "https://api.deezer.com/",
  /*headers: {
    Accept : 'application/json',
    'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
    }*/
});

export const axiosRequestMusix = axios.create({
  baseURL: "https://api.musixmatch.com/ws/1.1",
  /*headers: {
    Accept : 'application/json',
    'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
    }*/
});

export const axiosRequestLastFM = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0/",
  /*headers: {
    Accept : 'application/json',
    'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
    }*/
});