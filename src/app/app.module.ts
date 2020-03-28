import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {GridModule} from '@progress/kendo-angular-grid';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {UploadModule} from '@progress/kendo-angular-upload';
import { MenuModule } from '@progress/kendo-angular-menu';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LayoutModule } from '@progress/kendo-angular-layout';

//COMPONENTS
import { AppComponent } from './app.component';
import { AtlasNavigationComponent } from './atlas-navigation/atlas-navigation.component';
import { AtlasHeaderComponent } from './atlas-header/atlas-header.component';
import { AtlasTypographyComponent } from './foundation/atlas-typography/atlas-typography.component';
import { AtlasColorComponent } from './foundation/atlas-color/atlas-color.component';
import { AtlasGridSystemComponent } from './foundation/atlas-grid-system/atlas-grid-system.component';
import { AtlasPhilosophyComponent } from './foundation/atlas-philosophy/atlas-philosophy.component';
import { AtlasButtonsComponent } from './components/atlas-buttons/atlas-buttons.component';
import { AtlasModalsComponent } from './components/atlas-modals/atlas-modals.component';
import { AtlasFormElementsComponent } from './components/atlas-form-elements/atlas-form-elements.component';
import { AtlasCardsComponent } from './components/atlas-cards/atlas-cards.component';
import { AtlasIconographyComponent } from './components/atlas-iconography/atlas-iconography.component';
import { AtlasAccordionComponent } from './components/atlas-accordion/atlas-accordion.component';
import { AtlasTablesComponent } from './components/atlas-tables/atlas-tables.component';
import { AtlasBreadcrumbsComponent } from './components/atlas-breadcrumbs/atlas-breadcrumbs.component';
import { AtlasHomeComponent } from './atlas-home/atlas-home.component';
import { AtlasNotificationsComponent } from './components/atlas-notifications/atlas-notifications.component';
import { AtlasBadgeComponent } from './components/atlas-badge/atlas-badge.component';
import { AtlasFooterComponent } from './atlas-footer/atlas-footer.component';
import { AtlasSpacingComponent } from './foundation/atlas-spacing/atlas-spacing.component';


//SERVICES
import {DataService} from './atlas-header/data.service';

//DIRECTIVES
import { CopyClipboardDirective } from './directives/copy-clipboard.directive';
import { AtlasTestComponent } from './atlas-test/atlas-test.component';






const appRoutes: Routes = [
  { path: 'foundation/philosophy', component: AtlasPhilosophyComponent },
  { path: 'foundation/colors', component: AtlasColorComponent },
  { path: 'foundation/typography', component: AtlasTypographyComponent },
  { path: 'foundation/grid_system', component: AtlasGridSystemComponent },
  { path: 'foundation/spacing', component: AtlasSpacingComponent },
  { path: 'components/buttons', component: AtlasButtonsComponent },
  { path: 'components/modals', component: AtlasModalsComponent },
  { path: 'components/form_elements', component: AtlasFormElementsComponent },
  { path: 'components/cards', component: AtlasCardsComponent },
  { path: 'components/iconography', component: AtlasIconographyComponent },
  { path: 'components/accordion', component: AtlasAccordionComponent },
  { path: 'components/tables', component: AtlasTablesComponent },
  { path: 'components/breadcrumbs', component: AtlasBreadcrumbsComponent},
  { path: 'components/notifications', component: AtlasNotificationsComponent},
  { path: 'components/badge', component: AtlasBadgeComponent},
  { path: 'home', component: AtlasHomeComponent },
  { path: 'test', component: AtlasTestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AtlasNavigationComponent,
    AtlasHeaderComponent,
    AtlasTypographyComponent,
    AtlasColorComponent,
    AtlasGridSystemComponent,
    AtlasPhilosophyComponent,
    AtlasButtonsComponent,
    AtlasModalsComponent,
    AtlasFormElementsComponent,
    AtlasCardsComponent,
    AtlasIconographyComponent,
    AtlasAccordionComponent,
    AtlasTablesComponent,
    AtlasBreadcrumbsComponent,
    AtlasHomeComponent,
    AtlasFooterComponent,
    AtlasNotificationsComponent,
    AtlasBadgeComponent,
    AtlasSpacingComponent,
    CopyClipboardDirective,
    AtlasTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{
      useHash: true
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogsModule,
    ButtonsModule,
    DropDownsModule,
    DateInputsModule,
    GridModule,
    InputsModule,
    UploadModule,
    HttpClientModule,
    MenuModule,
    PopupModule,
    LayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
