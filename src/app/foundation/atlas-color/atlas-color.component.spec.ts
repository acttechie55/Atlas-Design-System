import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasColorComponent } from './atlas-color.component';

describe('AtlasColorComponent', () => {
  let component: AtlasColorComponent;
  let fixture: ComponentFixture<AtlasColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
