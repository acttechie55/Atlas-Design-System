import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTestComponent } from './atlas-test.component';

describe('AtlasTestComponent', () => {
  let component: AtlasTestComponent;
  let fixture: ComponentFixture<AtlasTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
