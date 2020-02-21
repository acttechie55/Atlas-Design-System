import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormElementsComponent } from './atlas-form-elements.component';

describe('AtlasFormElementsComponent', () => {
  let component: AtlasFormElementsComponent;
  let fixture: ComponentFixture<AtlasFormElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasFormElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
