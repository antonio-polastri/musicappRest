"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_jsonp_1 = __importDefault(require("fetch-jsonp"));
const Call = __importStar(require("./lib/config/api"));
class DataServiceWikiPage {
    constructor() {
        this.getBio = (artist) => __awaiter(this, void 0, void 0, function* () {
            let artistexplosed = artist.replace(' ', '%20');
            return yield (0, fetch_jsonp_1.default)(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&titles=${artistexplosed}&rvprop=content&rvsection=0&rvparse`)
                .then(function (response) {
                return response.json();
            }) /*.then(function(json) {
              console.log('parsed json', json)
            })*/
                .catch(function (ex) {
                console.log('parsing failed', ex);
            });
        });
        //necessario costruire la query per la rischiesta
        this.getArtist = (artist) => __awaiter(this, void 0, void 0, function* () {
            let artistexplosed = artist.replace(' ', '%20');
            // return await Call.axiosWiki.get(`/${artistexplosed}`).then(response => response.data);
            return yield Call.axiosWiki.get(`api.php?format=json&action=query&prop=revisions&titles=${artistexplosed}&rvprop=content&rvsection=0&rvparse`).then(response => response.data);
            //https://en.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=radiohead&rvprop=content&rvsection=0&rvparse
        });
        //problema JSON --> JSONP CROSS ORIGIN PROBLEM RISOLVE
    }
}
exports.default = new DataServiceWikiPage();
