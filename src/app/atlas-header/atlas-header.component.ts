import { Component, OnInit } from '@angular/core'; // Output, EventEmitter
import { DataService } from "./data.service";

@Component({
  selector: 'app-atlas-header',
  templateUrl: './atlas-header.component.html'
})
export class AtlasHeaderComponent implements OnInit {

  navExpanded:boolean;

  today: number = Date.now();
  // @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private data: DataService) {
    //this.data.currentMessage.subscribe(message => this.message = message)
   }

  ngOnInit() {
    this.data.cast.subscribe(data => this.navExpanded = data);
  }

  expansionMenu(){
    this.data.changeAdmin();
    //this.navExpanded = !this.navExpanded;
    // this.messageEvent.emit(this.navExpanded);
    //this.data.changeMessage("Hello from Sibling")
  }
  // sendValue(value) {
  //   this.data.setBehaviorView({textVal: value});
  //   }
}
