

import { ServiceWrapper } from "../services/lib/core/di/serviceWrapper";
import { DeterminateOrigin } from "../services/lib/core/strategy/strategy";
import DataServiceDeezer from "../services/data.serviceDeezer";
import DataServiceDiscogs from "../services/data.serviceDiscogs";
import DataServiceMusicbrainz from "../services/data.serviceMusicbrainz";
import DataServiceLyric from "../services/data.serviceLyrics";
import DataServiceMusicxMatch from "../services/data.serviceMusicxMatch";
import dataServiceLastFM from "../services/data.serviceLastFM";
import DataServicePredictHQ from "../services/data.servicePredictHQ";
 
//succesivamense separare il model dal controller
import {Artist,Track,Lyrics,Album} from "../services/lib/core/musicObject";
import { Schema } from "mongoose";
import { ArtistDeezer } from "../services/lib/core/class/Artist";
import { albumModel, artistModel,searchModel, trackModel } from "../models/mongo";
import console from "console";
import { MongoDs } from "../datasources/mongoDs";
import { deepStrictEqual } from "assert";
import dataServiceHotelBed from "../services/data.serviceHotelBed";

 


//Import the mongoose module
const { Timestamp } = require('bson');
 
 //open connection to db
let mds = new MongoDs();
  

exports.search = async (req:any, res:any)=>{


	let q = req.query.q;
	let st = req.query.st;
	let rs : any = [];
	//check is id already present this kind of research
	  mds.getSearch(q,st).then(async function(result) {
		  

		if(result[0]){
 
			console.log("getdata"+result[0])
				rs = await  mds.getData(q,st).then((response:any) =>   response ).catch();
				console.log("getdata FROM MONGO++++++++++++++++++++++++++++++++++++++++++++++++"+rs)

			}else{
 

				rs = (await new ServiceWrapper(DataServiceDiscogs).getSearch(q,st).then((response: any)=>response).catch())
					 .concat(await new ServiceWrapper(DataServiceDeezer).getSearch(q,st).then((response: any)=>response).catch())
					 .concat(await new ServiceWrapper(DataServiceMusicbrainz).getSearch(q,st).then((response: any)=>response).catch())
			
				//alph ordination	 
				rs = rs.sort((a:Artist,b:Artist)=>{

					let fn:string = a.name.toLowerCase();;
					let sn:string = b.name.toLowerCase();;

					return fn<sn ?-1: fn> sn? 1 :0;


				})

				console.log("getdata FROM RESOURCE*************************************"+rs.lenght)
				mds.insertSearch( q,rs,st);
				//and insert data inside at artist??
				mds.insertArtist(rs);
			
		
			}

			await res.status(200).send(JSON.stringify(rs) ); 

	}).catch()

 

	 
	
}



exports.artist = async (req:any, res:any) => {

	   let q = req.query.q; 
	  
	  let resultset = (await new ServiceWrapper(DataServiceDeezer).getArtist(q).then((response: any)=>response).catch())
        .concat(await new ServiceWrapper(DataServiceDiscogs).getArtist(q).then((response: any)=>response).catch())
        .concat(await new ServiceWrapper(DataServiceMusicbrainz).getArtist(q).then((response: any)=>response).catch())
 		
		//sare research
		mds.insertSearch(q,resultset,'artist')
		//mongo
		mds.insertArtist(resultset);
		
		res.status(200).send(JSON.stringify(resultset) ); 
	  
	 
	 };

exports.albums = async (req:any, res:any) => {

	let artistid = req.query.artistid;
	let origin = req.query.origin;

	//get dataservice and pass it in 
	let ds =  new DeterminateOrigin();
	let resultset = await new ServiceWrapper(ds.getOrigin(origin)).getAlbums(artistid).then( response=>{ return  response }).catch()
	//mongodb
	mds.insertAlbum(resultset);

	res.status(200).send(JSON.stringify(resultset) ); 
	

};	 

exports.songs = async (req:any, res:any) => {
	
	let albumid = req.query.albumid;
	let origin = req.query.origin; 

	let resultset = await new ServiceWrapper(new DeterminateOrigin().getOrigin(origin)).getTracks(albumid).then( response=>{ return response }).catch()

	mds.insertTrack(resultset);

	res.status(200).send(JSON.stringify(resultset) ); 
	

};

exports.trackdetail = async (req:any, res:any) => {
	
	let id = req.query.id;

	let resultset = await new ServiceWrapper(DataServiceDeezer).getTrack(id).then(response=>{return response}).catch() 

	res.status(200).send(JSON.stringify(resultset) ); 
	

};

exports.bio = async (req:any, res:any) => {
	
	let artist = req.query.artist;

	let resultset = await new ServiceWrapper(dataServiceLastFM).getBio(artist).then(response=>{return response}).catch() 

	res.status(200).send(JSON.stringify(resultset) ); 
	

};

exports.lyric = async (req:any, res:any) => {
	
	let artist = req.query.artist;
	let title = req.query.title;
	
/*
	let resultset = await new ServiceWrapper(DataServiceDeezer).getTrack(id).then(response=>{return response}).catch() 

	res.status(200).send(JSON.stringify(resultset) ); 
	*/

	let lyric : any =  (await DataServiceLyric.getLyrics(artist,title).then(response =>{return response}).catch(()=>{"No lyrics found"}))
	console.log("LYTICS ***** "+lyric.lyric);

	if(lyric.lyric && lyric.lyric.indexOf("testo non ") !== -1){

		lyric =  (await DataServiceMusicxMatch.getTrackFromLists(artist,title ).then(
		 
		 response =>{
			console.log("response. *****   "+response);
		   return {'lyric' : response.split("*******")[0]}
		 }).catch(()=>{"No lyrics found"})) 
		 console.log("LYTICS ***** 4+ "+lyric?.lyric);
			 res.status(200).send(JSON.stringify({'lyric' : "We are sorry ! Lyrics Not present!" }) ); 

		}else{
			 console.log("LYTICS ***** 5" );
			res.status(200).send(JSON.stringify(lyric) ); 

		}
		  

};

 
exports.concerts = async (req:any, res:any) => {
	
	let artist = req.query.artist;

	let resultset = await new ServiceWrapper(DataServicePredictHQ).getConcerts(artist).then((response :any )=>{return response}).catch() 

	res.status(200).send(JSON.stringify(resultset) ); 
	

};

exports.hotels = async (req:any, res:any) => {
	
	let artist = req.query.artist;

	let resultset = await new ServiceWrapper(dataServiceHotelBed).getHotels(artist).then((response :any )=>{return response}).catch() 

	res.status(200).send(JSON.stringify(resultset) ); 
	

};