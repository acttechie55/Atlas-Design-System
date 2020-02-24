import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-home',
  templateUrl: './atlas-home.component.html',
  styleUrls: ['./atlas-home.component.scss']
})
export class AtlasHomeComponent implements OnInit {

  componentStatus = [
    {
      available: true,
      className: 'fas fa-check-circle',
      text: 'Available'
    },
    {
      inProgress: true,
      className: 'fas fa-check-circle',
      text: 'In Progress'
    },
    {
      deprecated: true,
      className: 'fas fa-check-circle',
      text: 'Deprecated'
    },
    {
      upcoming: true,
      className: 'fas fa-check-circle',
      text: 'Upcoming'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
