import { Component, OnInit, Input } from '@angular/core';
//import { Clipboard } from '';
@Component({
  selector: 'app-atlas-color',
  templateUrl: './atlas-color.component.html'
})
export class AtlasColorComponent implements OnInit {

  brandColors = [ 
    {
      className: 'atlas-jc-blue-bg',
      colorValue: '#004b8d'
    },
    {
      className: 'atlas-jc-cyan-bg',
      colorValue: '#05a1dc'
    },
    {
      className: 'atlas-jc-orange-bg',
      colorValue: '#F48020'
    },
    {
      className: 'atlas-jc-green-bg',
      colorValue: '#70be54'
    }
  ]

  bluesColors = [ 
    {
      className: 'atlas-blue-gray-bg',
      colorValue: '#DDE0EC'
    },
    {
      className: 'atlas-jc-cyan-light-bg',
      colorValue: '#e2f6fe'
    },
    {
      className: 'atlas-jc-cyan-extra-light-bg',
      colorValue: "#05a1dc26"
    },
    {
      className: 'atlas-blue-light-bg',
      colorValue: "#dbeeff"
    },
    {
      className: 'atlas-jc-cyan-bg',
      colorValue: "#05a1dc"
    },
    {
      className: 'atlas-jc-cyan-dark-bg',
      colorValue: "#0481b0"
    },
    {
      className: 'atlas-jc-blue-bg',
      colorValue: "#004b8d"
    }
  ]

  successErrorColors = [ 
    {
      className: 'atlas-jc-green-bg',
      colorValue: '#70be54'
    },
    {
      className: 'atlas-caution-bg',
      colorValue: '#F7B924'
    },
    {
      className: 'atlas-error-bg',
      colorValue: '#D40000'
    },
    {
      className: 'atlas-error-hover-bg',
      colorValue: '#AA0000'
    },
    {
      className: 'atlas-secondary-error-hover-bg',
      colorValue: '#ffe8e8'
    }
  ]

  neutralColors = [ 
    {
      className: 'atlas-white-bg',
      colorValue: '#FFFFFF'
    },
    {
      className: 'atlas-off-white-bg',
      colorValue: '#fcfcfc'
    },
    {
      className: 'atlas-off-white-two-bg',
      colorValue: '#f8f9fa'
    },
    {
      className: 'atlas-white-gray-bg',
      colorValue: '#f1f4f6'
    },
    // {
    //   className: 'atlas-gray-two-bg'
    // },
    // {
    //   className: 'atlas-gray-three-bg'
    // },
    {
      className: 'atlas-gray-bg',
      colorValue: '#d2d6de'
    },
  
    {
      className: 'atlas-dark-gray-bg',
      colorValue: '#7F8489'
    },
    {
      className: 'atlas-darker-gray-bg',
      colorValue: '#495057'
    },
    {
      className: 'atlas-black-bg',
      colorValue: '#000000'
    }
  ]

  @Input()
  public name: string;

  public status: string;

  constructor() { }

  ngOnInit() {
    //var clipboard = new Clipboard('.btn');

  }

  public notify(event: string): void {
    let message = `'${event}' has been copied to clipboard`
    console.log(message);
    this.status = message;
  }

  // public stamp(): string {
  //   let now = new Date();
  //   let hours = now.getHours();
  //   let minutes = now.getMinutes();
  //   let seconds = now.getSeconds();
  //   return `time (${hours}:${minutes}:${seconds})`;
  // }

  showHex() {
    this.brandColors[0].colorValue = '#004b8d';
    this.brandColors[1].colorValue = '#05a1dc';
    this.brandColors[2].colorValue = '#F48020';
    this.brandColors[3].colorValue = '#70be54';

    this.bluesColors[0].colorValue = '#DDE0EC';
    this.bluesColors[1].colorValue = '#e2f6fe';
    this.bluesColors[2].colorValue = '#05a1dc26';
    this.bluesColors[3].colorValue = '#dbeeff';
    this.bluesColors[4].colorValue = '#05a1dc';
    this.bluesColors[5].colorValue = '#0481b0';
    this.bluesColors[6].colorValue = '#004b8d';

    this.neutralColors[0].colorValue = '#ffffff';
    this.neutralColors[1].colorValue = '#fcfcfc';
    this.neutralColors[2].colorValue = '#f8f9fa';
    this.neutralColors[3].colorValue = '#f1f4f6';
    this.neutralColors[4].colorValue = '#d2d6de';
    this.neutralColors[5].colorValue = '#7F8489';
    this.neutralColors[6].colorValue = '#495057';
    this.neutralColors[7].colorValue = '#000000';

    this.successErrorColors[0].colorValue = '#70be54';
    this.successErrorColors[1].colorValue = '#F7B924';
    this.successErrorColors[2].colorValue = '#D40000';
    this.successErrorColors[3].colorValue = '#AA0000';
    this.successErrorColors[4].colorValue = '#ffe8e8';
  }
  showRGB(){
    this.brandColors[0].colorValue = 'rgb(0, 75, 141)';
    this.brandColors[1].colorValue = 'rgb(5, 161, 220)';
    this.brandColors[2].colorValue = 'rgb(244, 128, 32)';
    this.brandColors[3].colorValue = 'rgb(112, 190, 84)';

    this.bluesColors[0].colorValue = 'rgb(221,224,236)';
    this.bluesColors[1].colorValue = 'rgb(226, 246, 254)';
    this.bluesColors[2].colorValue = 'rgba(5, 161, 220, 0.15)';
    this.bluesColors[3].colorValue = 'rgb(219, 238, 255)';
    this.bluesColors[4].colorValue = 'rgb(5, 161, 220)';
    this.bluesColors[5].colorValue = 'rgb(4, 129, 176)';
    this.bluesColors[6].colorValue = 'rgb(0, 75, 141)';

    this.neutralColors[0].colorValue = 'rgb(255, 255, 255)';
    this.neutralColors[1].colorValue = 'rgb(252, 252, 252)';
    this.neutralColors[2].colorValue = 'rgb(248, 249, 250)';
    this.neutralColors[3].colorValue = 'rgb(241, 244, 246)';
    this.neutralColors[4].colorValue = 'rgb(210, 214, 222)';
    this.neutralColors[5].colorValue = 'rgb(127,132,137)';
    this.neutralColors[6].colorValue = 'rgb(73, 80, 87)';
    this.neutralColors[7].colorValue = 'rgb(0, 0, 0)';

    this.successErrorColors[0].colorValue = 'rgb(112, 190, 84)';
    this.successErrorColors[1].colorValue = 'rgb(247, 185, 36)';
    this.successErrorColors[2].colorValue = 'rgb(212, 0, 0)';
    this.successErrorColors[3].colorValue = 'rgb(170, 0, 0)';
    this.successErrorColors[4].colorValue = 'rgb(255, 232, 232)';
  }

  showSass(){
    this.brandColors[0].colorValue = '$JC-blue';
    this.brandColors[1].colorValue = '$JC-cyan';
    this.brandColors[2].colorValue = '$JC-orange';
    this.brandColors[3].colorValue = '$JC-green';

    this.bluesColors[0].colorValue = '$atlas-blue-gray';
    this.bluesColors[1].colorValue = '$JC-cyan-light';
    this.bluesColors[2].colorValue = '$JC-cyan-extra-light';
    this.bluesColors[3].colorValue = '$JC-blue-light';
    this.bluesColors[4].colorValue = '$JC-cyan';
    this.bluesColors[5].colorValue = '$JC-cyan-dark';
    this.bluesColors[6].colorValue = '$JC-blue';

    this.neutralColors[0].colorValue = '$atlas-white';
    this.neutralColors[1].colorValue = '$atlas-off-white';
    this.neutralColors[2].colorValue = '$atlas-off-white-two';
    this.neutralColors[3].colorValue = '$atlas-white-gray';
    this.neutralColors[4].colorValue = '$atlas-gray';
    this.neutralColors[5].colorValue = '$atlas-dark-gray';
    this.neutralColors[6].colorValue = '$atlas-darker-gray';
    this.neutralColors[7].colorValue = '$atlas-black';

    this.successErrorColors[0].colorValue = '$atlas-success';
    this.successErrorColors[1].colorValue = '$atlas-caution';
    this.successErrorColors[2].colorValue = '$atlas-error';
    this.successErrorColors[3].colorValue = '$atlas-error-hover';
    this.successErrorColors[4].colorValue = '$atlas-secondary-error-hover';
  }

}
