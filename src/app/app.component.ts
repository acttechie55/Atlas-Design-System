import { Component } from '@angular/core';
//import { DOCUMENT } from '@angular/platform-browser';
// import { AtlasHeaderComponent} from "./atlas-header/atlas-header.component";
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
  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 992;
  headerWithImpersonationHeight: number;

  /**
     * Inject the service which will be called by our button (click).
     *
     *
     *                       
     * @param {DataService} data instance.
     */


  public constructor(public data: DataService) {
    this.isMobile = this.width < this.mobileWidth;    
    // var offsetHeight = document.getElementById('atlas-header').offsetHeight
    // console.log(offsetHeight)
   }

   onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;

    // if(!this.isMobile) {
    //   this.navExpanded = true;
    // }
}
}
