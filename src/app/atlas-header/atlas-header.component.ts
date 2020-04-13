import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-atlas-header',
  templateUrl: './atlas-header.component.html'
})
export class AtlasHeaderComponent  {

  navExpanded:boolean;


  today: number = Date.now();


  /**
     * Inject the theme service which will be called by our button (click).
     *
     * @param {DataService} data instance.
     */

    public constructor(public data: DataService) {
    //this.data.currentMessage.subscribe(message => this.message = message)
   }

  ngOnInit() {
  }

 
}
