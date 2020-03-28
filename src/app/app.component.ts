import { Component } from '@angular/core';
import { DataService } from "./atlas-header/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class AppComponent {
  title = 'atlas-style-guide';
  navExpanded:boolean;
  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 992;
  //navExpandedMobile:boolean;

  constructor(private data: DataService) {
    this.data.cast.subscribe(data => this.navExpanded = data);
    this.isMobile = this.width < this.mobileWidth;
    //this.data.castMobile.subscribe(data => this.navExpandedMobile = data);
    
   }

   onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;

    // if(!this.isMobile) {
    //   this.navExpanded = true;
    // }
}


  // ngOnInit() {
  //   this.data.cast.subscribe(data => this.navExpanded = data);
  //   //this.data.currentMessage.subscribe(message => this.message = message);
  // }
}
