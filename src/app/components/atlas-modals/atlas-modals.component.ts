import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-modals',
  templateUrl: './atlas-modals.component.html'
})
export class AtlasModalsComponent implements OnInit {

  title:string ="Modals";

  constructor() { }

  ngOnInit() {
  }

  public dialogOpened = false;
  public windowOpened = false;

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
