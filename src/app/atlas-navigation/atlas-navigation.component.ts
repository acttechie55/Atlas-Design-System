import { Component, OnInit } from '@angular/core';
import { DataService } from "../atlas-header/data.service";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home',                      title: 'Home',          icon:'fal fa-home-lg-alt' },
  { path: 'foundation/philosophy',      title: 'Philosophy',    icon:'fal fa-books' },
  { path: 'foundation/colors',          title: 'Colors',        icon:'fal fa-palette' },
  { path: 'foundation/typography',      title: 'Typography',    icon:'fal fa-text' },
  { path: 'foundation/grid_system',     title: 'Grid System',   icon:'fal fa-th'},
  { path: 'foundation/spacing',         title: 'Spacing',       icon:'fad fa-ruler-combined'}
];


export const ROUTESTWO: RouteInfo[] = [
  { path: 'components/buttons',         title: 'Buttons',       icon:'fal fa-keyboard'},
  { path: 'components/modals',          title: 'Modals',        icon:'fal fa-window-restore' },
  { path: 'components/form_elements',   title: 'Form Elements', icon:'fal fa-file-alt' },
  { path: 'components/cards',           title: 'Cards',         icon:'fal fa-square'},
  { path: 'components/iconography',     title: 'Iconography',   icon:'fal fa-icons' },
  // { path: 'components/accordion',       title: 'Accordion',     icon:'fas fa-list' },
  { path: 'components/tables',          title: 'Tables',        icon:'fal fa-table'},
  // { path: 'components/breadcrumbs',     title: 'Breadcrumbs',   icon:'fas fa-road'},
  { path: 'components/notifications',   title: 'Notifications', icon:'fad fa-bell'},
  { path: 'components/badge',           title: 'Badges',        icon:'fal fa-id-badge'}
];


@Component({
  selector: 'app-atlas-navigation',
  templateUrl: './atlas-navigation.component.html',
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class AtlasNavigationComponent implements OnInit {

  public menuItems: any[];
  public menuItemsTwo: any[];
  //message:string;
  navExpanded:boolean;
  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;

  constructor(private data: DataService) {
    this.isMobile = this.width < this.mobileWidth;
   }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemsTwo = ROUTESTWO.filter(menuItemTwo => menuItemTwo);
    this.data.cast.subscribe(data => this.navExpanded = data);
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
}


  navLink(){
    if(this.isMobile){
      this.navExpanded = !this.navExpanded;
    } else {
      this.navExpanded == false;
    }
  }

}
