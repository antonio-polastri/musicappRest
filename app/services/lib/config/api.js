"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosRequestLastFM = exports.axiosRequestMusix = exports.axiosRequestDeezer = exports.axiosRequestDS = exports.axiosWiki = exports.axiosLyrics = exports.axiosRequestMB = exports.axiosRequestItunes = void 0;
const axios_1 = __importDefault(require("axios"));
//https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
exports.axiosRequestItunes = axios_1.default.create({
    baseURL: "https://itunes.apple.com/search?media=music&  "
});
//https://musicbrainz.org/doc/MusicBrainz_API
exports.axiosRequestMB = axios_1.default.create({
    baseURL: "https://musicbrainz.org/ws/2/",
    headers: {
        Accept: 'application/json'
    }
});
//https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
exports.axiosLyrics = axios_1.default.create({
    baseURL: "https://api.lyrics.ovh/v1/"
});
exports.axiosWiki = axios_1.default.create({
    //baseURL: "https://en.wikipedia.org/w/rest.php/v1/page/"
    baseURL: "https://en.wikipedia.org/w/",
    headers: {
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
exports.axiosRequestDS = axios_1.default.create({
    baseURL: "https://api.discogs.com/",
    headers: {
        Accept: 'application/json',
        'User-Agent': 'MyMusicaap/1.0 +http://localhost'
    }
});
exports.axiosRequestDeezer = axios_1.default.create({
    baseURL: "https://api.deezer.com/",
    /*headers: {
      Accept : 'application/json',
      'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
      }*/
});
exports.axiosRequestMusix = axios_1.default.create({
    baseURL: "https://api.musixmatch.com/ws/1.1",
    /*headers: {
      Accept : 'application/json',
      'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
      }*/
});
exports.axiosRequestLastFM = axios_1.default.create({
    baseURL: "http://ws.audioscrobbler.com/2.0/",
    /*headers: {
      Accept : 'application/json',
      'User-Agent' : 'MyMusicaap/1.0 +http://localhost'
      }*/
});
