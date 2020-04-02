import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-grid-system',
  templateUrl: './atlas-grid-system.component.html'
})
export class AtlasGridSystemComponent implements OnInit {

  deviceRanges = [
    {
      icon: "fas fa-mobile-alt fa-7x",
      rangeNumber: "From 0 to 576px",
      viewportOnly: "$atlas-mobile-xs-max"
    },
    {
      icon: "fas fa-mobile-alt fa-rotate-270 fa-7x",
      rangeNumber: "From 576px to 768px",
      viewportOnly: "$atlas-mobile",
      rangeOnly: "$atlas-mobile-max"
    },
    {
      icon: "fas fa-tablet-alt fa-7x",
      rangeNumber: "From 768px to 991px",
      viewportOnly: "$atlas-tablet",
      rangeOnly: "$atlas-tablet-max"
    },
    {
      icon: "fas fa-laptop fa-7x",
      rangeNumber: "From 992px to 1200px",
      viewportOnly: "$atlas-desktop",
      rangeOnly: "$atlas-desktop-max"
    },
    {
      icon: "fas fa-desktop fa-7x",
      rangeNumber: "From 1200px to greater",
      viewportOnly: "$atlas-desktop-lg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
