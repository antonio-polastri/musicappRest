import {Origin,Lyrics, LyricsAbstractClass} from '../musicObject';

export class LyricsOvh extends LyricsAbstractClass{
 

    protected initial(json: any): void {
        this.origin= "lyricsovh";
        this.lyric = json.lyrics;
        this.id = '';
        this.albumid = '';
        this.artistid ='';
        
    }

    
}