import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-iconography',
  templateUrl: './atlas-iconography.component.html',
  styleUrls: ['./atlas-iconography.component.scss']
})
export class AtlasIconographyComponent implements OnInit {


  iconography = [
    {
      iconPicture: 'far fa-calendar-alt',
      name: 'Calendar',
      summary: 'For describing a day or month, or specifically the Schedule & Bookings Portal',
      className: 'far fa-calendar-alt'
    },
    {
      iconPicture: 'fas fa-check-circle',
      name: 'Circled Checkmark',
      summary: 'Represents the successful completion of a task',
      className: 'fas fa-check-circle'
    },
    {
      iconPicture: 'fas fa-exclamation-circle',
      name: 'Circled Exclamation Point',
      summary: 'Notifies User of An Error',
      className: 'fas fa-exclamation-circle'
    },
    {
      iconPicture: 'fas fa-chevron-down',
      name: 'Chevron Down',
      summary: 'Triggers a menu or expansion of content',
      className: 'fas fa-check-circle'
    },
    {
      iconPicture: 'fas fa-clipboard',
      name: 'Clipboard',
      summary: 'Refers to anything within the Orders & Presents Portal ',
      className: 'fas fa-clipboard'
    },
    {
      iconPicture: 'fas fa-minus',
      name: 'Collapse',
      summary: 'Minimizes Content',
      className: 'fas fa-minus'
    },
    {
      iconPicture: 'fas fa-cog',
      name: 'Cogwheel',
      summary: 'Configures new changes, specfically to the Settings portal',
      className: 'fas fa-cog'
    },
    {
      iconPicture: 'fas fa-dollar-sign',
      name: 'Dollar Sign',
      summary: 'Refers to anything money-related, specifically the Time & Expenses Portal ',
      className: 'fas fa-dollar-sign'
    },
    {
      iconPicture: 'fas fa-envelope',
      name: 'Email',
      summary: 'Refers to any electronic correspondence',
      className: 'fas fa-envelope'
    },
    {
      iconPicture: 'fas fa-plus',
      name: 'Expand',
      summary: 'Shows additional content',
      className: 'fas fa-plus'
    },
    {
      iconPicture: 'fas fa-exclamation',
      name: 'Exclamation Point',
      summary: 'Notifies User of An Error',
      className: 'fas fa-exclamation'
    },
    {
      iconPicture: 'fas fa-filter',
      name: 'Funnel',
      summary: 'Narrows content to more relevant information',
      className: 'fas fa-filter'
    },
    {
      iconPicture: 'far fa-question-circle',
      name: 'Help',
      summary: 'Represents the homepage or dashboard',
      className: 'far fa-question-circle'
    },
    {
      iconPicture: 'fas fa-home',
      name: 'Home',
      summary: 'Represents supportive additional information',
      className: 'fas fa-home'
    },
    {
      iconPicture: 'fas fa-info-circle',
      name: 'Info',
      summary: 'Represents relevant contextual information',
      className: 'fas fa-info-circle'
    },
    {
      iconPicture: 'fas fa-sign-out-alt',
      name: 'Logout',
      summary: 'Triggers an exit',
      className: 'fas fa-sign-out-alt'
    },
    {
      iconPicture: 'fas fa-bars',
      name: 'Menu',
      summary: 'Triggers navigational menu',
      className: 'fas fa-bars'
    },
    {
      iconPicture: 'fas fa-bell',
      name: 'Notification Bell',
      summary: 'Informs new tasks to be completed or other general information',
      className: 'fas fa-bell'
    },
    {
      iconPicture: 'fas fa-phone',
      name: 'Phone',
      summary: 'Refers to any telephone communication',
      className: 'fas fa-phone'
    },
    {
      iconPicture: 'fas fa-times-circle',
      name: 'Reject',
      summary: 'Represents denial or rejection of a particular task',
      className: 'fas fa-times-circle'
    },
    {
      iconPicture: 'fas fa-sort',
      name: 'Sort',
      summary: 'Refers to rearranging content according to a specific criterion',
      className: 'fas fa-sort'
    },
    {
      iconPicture: 'fas fa-user-circle',
      name: 'User Circle',
      summary: 'Symbolizes a generic avatar of the user',
      className: 'fas fa-user-circle'
    },
    {
      iconPicture: 'fas fa-exclamation-triangle',
      name: 'Warning',
      summary: 'Represents caution regarding a task',
      className: 'fas fa-exclamation-triangle'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
