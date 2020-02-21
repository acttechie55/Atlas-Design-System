import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable} from 'rxjs'; 

@Injectable()
export class DataService {
    
private navExpanded = new BehaviorSubject<boolean>(false);
cast = this.navExpanded.asObservable();

constructor() { }

changeAdmin(){
    this.navExpanded.next(!this.navExpanded.value);
  }

}