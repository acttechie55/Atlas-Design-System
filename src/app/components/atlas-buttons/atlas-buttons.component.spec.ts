import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasButtonsComponent } from './atlas-buttons.component';

describe('AtlasButtonsComponent', () => {
  let component: AtlasButtonsComponent;
  let fixture: ComponentFixture<AtlasButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
