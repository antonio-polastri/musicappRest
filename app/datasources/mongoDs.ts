import { query } from "express";
import mongoose from "mongoose";
import { albumModel, artistModel,searchModel, trackModel } from "../models/mongo";
 
export class MongoDs{

    private db :any ;

    constructor(){

        var mongoose = require('mongoose');
        const MongoClient = require('mongodb').MongoClient
        
        const m_user = process.env.MONGO_DB_USR || 'default';
        const m_psw = process.env.MONGO_DB_PWS || 'default';
        const m_ip = process.env.MONGO_IP || 'default';
        const m_port = process.env.MONGO_PORT || 'default';
        const m_db = process.env.MONGO_DB || 'default';
        var mongoDB = 'mongodb://'+m_user+':'+m_psw+'@'+m_ip+':'+m_port+'/'+m_db+'?authMechanism=SCRAM-SHA-1';


        mongoose.connect(mongoDB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          });

          this.db = mongoose.connection;
          //Bind connection to error event (to get notification of connection errors)
           this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
           this.db.once('open', function callback () {
            console.log("connected and open");
            });
    }


    init(){
        
    }

    insertArtist = (rs :any) =>{

        artistModel.insertMany(rs ,{ordered: false},(error,docs)=>{
             
            }) 
    
    
    }

    insertAlbum = (rs :any) =>{

        albumModel.insertMany(rs ,{ordered: false},(error,docs)=>{
		 
		}) 
    
    
    }

    insertTrack = (rs :any) =>{

        trackModel.insertMany(rs ,{ordered: false},(error,docs)=>{
            //	console.log(error)
            //	console.log(docs)
            }) 
    
    }

    insertSearch = (q:string, rs:any,type: string) => {

        const search = new searchModel({query :q , count : rs.length,searchType :type})
		
		//check if quesy exixts and the time
		search.save(function (err: any) {
			//if (err) return console.log(err);
			// saved!
		}) 

    }
    getSearch =  async (q:string,type : string) =>{
         
       let rs: any = '';
       console.log("getSearch+++++++++++"+q+" : "+type)
        rs = await searchModel.find({query : q,searchType :{$regex: new RegExp(type, 'i')} } );
       
        return rs;
    }
    getData:any = async (q:string,type : string) => {

        let rs: any = '';
        if(type == 'artist'){
            
            console.log("getdata+++++++++++"+q+" : "+type)
//https://stackoverflow.com/questions/1863399/mongodb-is-it-possible-to-make-a-case-insensitive-query
            let re = ''
            rs = await artistModel.find({name : {$regex: new RegExp(q, 'i')}} ); 
            console.log("getdata+++++++++++"+rs)
              return rs;
            }
         
        return rs;
        
        
    }
}