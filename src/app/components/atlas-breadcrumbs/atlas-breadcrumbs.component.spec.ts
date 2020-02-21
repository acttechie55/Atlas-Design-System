import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasBreadcrumbsComponent } from './atlas-breadcrumbs.component';

describe('AtlasBreadcrumbsComponent', () => {
  let component: AtlasBreadcrumbsComponent;
  let fixture: ComponentFixture<AtlasBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
