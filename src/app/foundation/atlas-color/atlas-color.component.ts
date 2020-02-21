import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-color',
  templateUrl: './atlas-color.component.html'
})
export class AtlasColorComponent implements OnInit {

  brandColors = [ 
    {
      className: 'atlas-jc-blue-bg'
    },
    {
      className: 'atlas-jc-cyan-bg'
    },
    {
      className: 'atlas-jc-orange-bg'
    },
    {
      className: 'atlas-jc-green-bg'
    }
  ]

  derivativeColors = [ 
    {
      className: 'atlas-jc-cyan-dark-bg'
    },
    {
      className: 'atlas-jc-cyan-light-bg'
    },
    {
      className: 'atlas-jc-cyan-extra-light-bg'
    },
    {
      className: 'atlas-blue-light-bg'
    }
  ]

  successErrorColors = [ 
    {
      className: 'atlas-jc-green-bg'
    },
    {
      className: 'atlas-caution-bg'
    },
    {
      className: 'atlas-error-bg'
    },
    {
      className: 'atlas-error-hover-bg'
    }
  ]

  neutralColors = [ 
    {
      className: 'atlas-white-bg'
    },
    {
      className: 'atlas-white-two-bg'
    },
    {
      className: 'atlas-white-three-bg'
    },
    {
      className: 'atlas-white-four-bg'
    },
    {
      className: 'atlas-gray-bg'
    },
    {
      className: 'atlas-gray-two-bg'
    },
    {
      className: 'atlas-gray-three-bg'
    },
    {
      className: 'atlas-gray-four-bg'
    },
    {
      className: 'atlas-gray-five-light-bg'
    },
    {
      className: 'atlas-gray-five-lighter-bg'
    },
    {
      className: 'atlas-black-bg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
