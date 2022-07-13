"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDs = void 0;
const mongo_1 = require("../models/mongo");
class MongoDs {
    constructor() {
        this.insertArtist = (rs) => {
            mongo_1.artistModel.insertMany(rs, { ordered: false }, (error, docs) => {
            });
        };
        this.insertAlbum = (rs) => {
            mongo_1.albumModel.insertMany(rs, { ordered: false }, (error, docs) => {
            });
        };
        this.insertTrack = (rs) => {
            mongo_1.trackModel.insertMany(rs, { ordered: false }, (error, docs) => {
                //	console.log(error)
                //	console.log(docs)
            });
        };
        this.insertSearch = (q, rs, type) => {
            const search = new mongo_1.searchModel({ query: q, count: rs.length, searchType: type });
            //check if quesy exixts and the time
            search.save(function (err) {
                //if (err) return console.log(err);
                // saved!
            });
        };
        this.getSearch = (q, type) => __awaiter(this, void 0, void 0, function* () {
            let rs = '';
            rs = yield mongo_1.searchModel.find({ query: q, searchType: type });
            return rs;
        });
        this.getData = (q, type) => __awaiter(this, void 0, void 0, function* () {
            let rs = '';
            if (type == 'artist') {
                console.log("getdata+++++++++++" + q + " : " + type);
                //https://stackoverflow.com/questions/1863399/mongodb-is-it-possible-to-make-a-case-insensitive-query
                rs = yield mongo_1.artistModel.find({ name: { $regex: new RegExp('^' + q, 'i') } });
                console.log("getdata+++++++++++" + rs);
                return rs;
            }
            return rs;
        });
        var mongoose = require('mongoose');
        const MongoClient = require('mongodb').MongoClient;
        const m_user = process.env.MONGO_DB_USR || 'default';
        const m_psw = process.env.MONGO_DB_PWS || 'default';
        const m_ip = process.env.MONGO_IP || 'default';
        const m_port = process.env.MONGO_PORT || 'default';
        const m_db = process.env.MONGO_DB || 'default';
        var mongoDB = 'mongodb://' + m_user + ':' + m_psw + '@' + m_ip + ':' + m_port + '/' + m_db + '?authMechanism=SCRAM-SHA-1';
        mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        this.db.once('open', function callback() {
            console.log("connected and open");
        });
    }
    init() {
    }
}
exports.MongoDs = MongoDs;
