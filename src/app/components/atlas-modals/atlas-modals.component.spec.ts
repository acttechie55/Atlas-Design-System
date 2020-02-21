import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasModalsComponent } from './atlas-modals.component';

describe('AtlasModalsComponent', () => {
  let component: AtlasModalsComponent;
  let fixture: ComponentFixture<AtlasModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
