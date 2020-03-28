import { Component, OnInit } from '@angular/core'; // Output, EventEmitter
import { DataService } from "./data.service";

@Component({
  selector: 'app-atlas-header',
  templateUrl: './atlas-header.component.html'
})
export class AtlasHeaderComponent implements OnInit {

  navExpanded:boolean;
  navExpandedMobile:boolean;

  today: number = Date.now();
  // @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private data: DataService) {
    //this.data.currentMessage.subscribe(message => this.message = message)
   }

  ngOnInit() {
    this.data.cast.subscribe(data => this.navExpanded = data);
    this.data.castMobile.subscribe(data => this.navExpandedMobile = data);
  }

  expansionMenuDesktop(){
    this.data.changeNavDesktop();
    //this.navExpanded = !this.navExpanded;
    // this.messageEvent.emit(this.navExpanded);
    //this.data.changeMessage("Hello from Sibling")
  }
  expansionMenuMobile(){
    this.data.changeNavMobile();
  }
  // sendValue(value) {
  //   this.data.setBehaviorView({textVal: value});
  //   }
}
