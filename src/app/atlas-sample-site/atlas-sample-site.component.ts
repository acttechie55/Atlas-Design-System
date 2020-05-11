import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-sample-site',
  templateUrl: './atlas-sample-site.component.html'
})
export class AtlasSampleSiteComponent implements OnInit {

  expandSchedule:boolean = false;
  expandScheduleTwo:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
