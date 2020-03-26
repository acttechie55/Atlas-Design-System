import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

  /*Angular animation starts on line 8.*/
@Component({
  selector: 'app-atlas-modals',
  templateUrl: './atlas-modals.component.html',
   animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('150ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AtlasModalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*Code That Came From Kendo Dialog. Not Even Sure What It Means*/
  public dialogOpened = false;
 
    public close(component) {
      this[component + 'Opened'] = false;
    }

    public open(component) {
      this[component + 'Opened'] = true;
    }

    public action(status) {
      console.log(`Dialog result: ${status}`);
      this.dialogOpened = false;
    }

}
