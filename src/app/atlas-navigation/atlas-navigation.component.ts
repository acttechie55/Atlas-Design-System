import { Component, OnInit } from '@angular/core';
import { DataService } from "../atlas-header/data.service";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  subMenu: boolean;
}

export interface SubRouteInfo {
  path: string;
  title: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home',                      title: 'Home',          icon:'fal fa-home-lg-alt', subMenu: false },
  { path: 'foundation/philosophy',      title: 'Philosophy',    icon:'fal fa-books', subMenu: false },
  { path: 'foundation/colors',          title: 'Colors',        icon:'fal fa-palette', subMenu: false },
  { path: 'foundation/typography',      title: 'Typography',    icon:'fal fa-text', subMenu: false },
  { path: 'foundation/grid_system',     title: 'Grid System',   icon:'fal fa-th', subMenu: false},
  { path: 'foundation/spacing',         title: 'Spacing',       icon:'fal fa-ruler-combined', subMenu: false},
  { path: '/test',                      title: 'Test',          icon:'fal fa-home-lg-alt', subMenu: true },
];


export const ROUTESTWO: RouteInfo[] = [
  { path: 'components/buttons',         title: 'Buttons',       icon:'fal fa-keyboard', subMenu: false},
  { path: 'components/modals',          title: 'Modals',        icon:'fal fa-window-restore', subMenu: false },
  { path: 'components/form_elements',   title: 'Form Elements', icon:'fal fa-file-alt', subMenu: false },
  { path: 'components/cards',           title: 'Cards',         icon:'fal fa-square', subMenu: false},
  { path: 'components/iconography',     title: 'Iconography',   icon:'fal fa-icons', subMenu: false },
  // { path: 'components/accordion',       title: 'Accordion',     icon:'fas fa-list' },
  { path: 'components/tables',          title: 'Tables',        icon:'fal fa-table', subMenu: false},
  // { path: 'components/breadcrumbs',     title: 'Breadcrumbs',   icon:'fas fa-road'},
  { path: 'components/notifications',   title: 'Notifications', icon:'fal fa-bell', subMenu: false},
  { path: 'components/badge',           title: 'Badges',        icon:'fal fa-id-badge', subMenu: false}
];

export const subMenuItems: SubRouteInfo[]  = [
  { path: 'components/buttons',         title: 'Unapproved'},
  { path: 'components/modals',          title: 'Approved' },
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

  navExpanded:boolean;
  navExpandedMobile:boolean;
  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 992;


   /**
     * Inject the theme service which will be called by our button (click).
     *
     * @param {DataService} data instance.
     */

  public constructor(public data: DataService) {
    this.isMobile = this.width < this.mobileWidth;
   }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemsTwo = ROUTESTWO.filter(menuItemTwo => menuItemTwo);
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;

}


  navLink(){
    if(this.isMobile){
      this.data.toggle()
    } else {
      this.data.navExpanded == false;
    }
  }


}
