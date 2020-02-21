import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-status',
  templateUrl: './atlas-badge.component.html'
})
export class AtlasBadgeComponent implements OnInit {

  listOfStatuses = [
    {
      text: "danger",
      className:"atlas-error"
    },
    {
      text: "success",
      className: "atlas-success"
    },
    {
      text: "caution",
      className:"atlas-caution"
    },
    {
      text: "info",
      className:"atlas-info"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
