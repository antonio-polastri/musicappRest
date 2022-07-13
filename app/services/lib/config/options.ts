//è necessario che mappi per ogni tipo di motore la dicitura corretta
export interface typeOfSeach  { 

        artist: string  ;
        album: string ;
        track: string  ;
        label: string  ;
        dur_min: string  ;
        dur_max: string  ;
        bpm_min: string  ;
        bpm_max: string  ;

}

export class typeOfSeachDeezen implements typeOfSeach  {
    
   public artist: string;
   public album: string;
   public track: string;
   public  label: string;
   public dur_min: string;
   public  dur_max: string;
   public   bpm_min: string;
   public  bpm_max: string;

    constructor(){

        this.artist = 'artist:';
        this.album = 'album:';
        this.track = 'track:' ;
        this.label = 'label:';
        this.dur_min =  'dur_min' ;
        this.dur_max = 'dur_max';
        this.bpm_min =  'bpm_min' ;
        this.bpm_max = 'bpm_max' ;
    }
  
}

  export type typeOfSeachT = {
    
     artist: string   ,
     album: string,
     track: string,
     label: string,
     dur_min: string,
     dur_max: string,
     bpm_min: string,
     bpm_max: string,
 
    
   
 }/*
 export  const typeOfSeachDez : typeOfSeachT = {

    artist : 'artist:',
    album : 'album:',
    track : 'track:' ,
    label : 'label:',
    dur_min :  'dur_min' ,
    dur_max : 'dur_max',
    bpm_min :  'bpm_min' ,
    bpm_max : 'bpm_max' 
 }*/
 export  const typeOfSeachDez : typeOfSeachT = {

    artist : 'artist',
    album : 'album',
    track : 'track' ,
    label : 'label',
    dur_min :  'dur_min' ,
    dur_max : 'dur_max',
    bpm_min :  'bpm_min' ,
    bpm_max : 'bpm_max' 
 }
 export  const typeOfSeachDiscogs : typeOfSeachT = {

    artist : 'artist',
    album : 'release',
    track : 'track' ,
    label : 'label',
    dur_min :  'dur_min' ,
    dur_max : 'dur_max',
    bpm_min :  'bpm_min' ,
    bpm_max : 'bpm_max' 
 }
 export  const typeOfSeachMusicb : typeOfSeachT = {

   artist : 'artist',
   album : 'release-group',
   track : 'recording' ,


   label : 'label',
   dur_min :  'dur_min' ,
   dur_max : 'dur_max',
   bpm_min :  'bpm_min' ,
   bpm_max : 'bpm_max' 
}