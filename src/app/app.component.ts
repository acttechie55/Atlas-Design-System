import { Component } from '@angular/core';
import { DataService } from "./atlas-header/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'atlas-style-guide';
  navExpanded:boolean;

  constructor(private data: DataService) {
    this.data.cast.subscribe(data => this.navExpanded = data);
   }


  // ngOnInit() {
  //   this.data.cast.subscribe(data => this.navExpanded = data);
  //   //this.data.currentMessage.subscribe(message => this.message = message);
  // }
}
