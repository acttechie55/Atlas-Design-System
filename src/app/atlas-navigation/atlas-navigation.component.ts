import { Component, OnInit } from '@angular/core';
import { DataService } from "../atlas-header/data.service";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home',                      title: 'Home',          icon:'fas fa-home' },
  { path: 'foundation/philosophy',      title: 'Philosophy',    icon:'far fa-lightbulb' },
  { path: 'foundation/colors',          title: 'Colors',        icon:'fas fa-palette' },
  { path: 'foundation/typography',      title: 'Typography',    icon:'far fa-file-word' },
  { path: 'foundation/grid_system',     title: 'Grid System',   icon:'fas fa-th'},
  { path: 'foundation/spacing',         title: 'Spacing',       icon:'fas fa-ruler-combined'}
];


export const ROUTESTWO: RouteInfo[] = [
  { path: 'components/buttons',         title: 'Buttons',       icon:'far fa-keyboard'},
  { path: 'components/modals',          title: 'Modals',        icon:'far fa-window-restore' },
  { path: 'components/form_elements',   title: 'Form Elements', icon:'far fa-file' },
  { path: 'components/cards',           title: 'Cards',         icon:'far fa-square'},
  { path: 'components/iconography',     title: 'Iconography',   icon:'fas fa-icons' },
  { path: 'components/accordion',       title: 'Accordion',     icon:'fas fa-list' },
  { path: 'components/tables',          title: 'Tables',        icon:'fas fa-table'},
  { path: 'components/breadcrumbs',     title: 'Breadcrumbs',   icon:'fas fa-road'},
  { path: 'components/notifications',   title: 'Notifications', icon:'fas fa-bell'},
  { path: 'components/badge',           title: 'Badges',        icon:'far fa-id-badge'}
];


@Component({
  selector: 'app-atlas-navigation',
  templateUrl: './atlas-navigation.component.html'
})
export class AtlasNavigationComponent implements OnInit {

  public menuItems: any[];
  public menuItemsTwo: any[];
  //message:string;
  navExpanded:boolean;

  constructor(private data: DataService) { }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemsTwo = ROUTESTWO.filter(menuItemTwo => menuItemTwo);
    this.data.cast.subscribe(data => this.navExpanded = data);
    //this.data.currentMessage.subscribe(message => this.message = message);
  }


  navLink(){
    //this.navExpanded = !this.navExpanded;
  }

}
