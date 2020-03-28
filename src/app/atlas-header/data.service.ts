import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable} from 'rxjs'; 

@Injectable()
export class DataService {
    
private navExpanded = new BehaviorSubject<boolean>(false);
private navExpandedMobile = new BehaviorSubject<boolean>(false);
cast = this.navExpanded.asObservable();
castMobile = this.navExpandedMobile.asObservable();

constructor() { }

changeNavDesktop(){
    this.navExpanded.next(!this.navExpanded.value);
}
changeNavMobile(){
  this.navExpandedMobile.next(!this.navExpandedMobile.value);
}

}