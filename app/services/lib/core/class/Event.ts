import { EventAbstractClass, Origin} from '../musicObject';

export class Events extends EventAbstractClass{
     
    protected initial(json: any): void {
       
        this.origin= 'predicthq';
       
       this.title = json.title;
       this.category = json.category;
       this.start = json.start
       this.end = json.end
       this.location = json.location
       this.country = json.country
       this.id = json.id;
       this.entities = json.entities
       this.timezone = json.timezone

    }
     


}
 
     
 