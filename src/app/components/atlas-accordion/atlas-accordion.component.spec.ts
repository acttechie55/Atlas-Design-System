import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasAccordionComponent } from './atlas-accordion.component';

describe('AtlasAccordionComponent', () => {
  let component: AtlasAccordionComponent;
  let fixture: ComponentFixture<AtlasAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
