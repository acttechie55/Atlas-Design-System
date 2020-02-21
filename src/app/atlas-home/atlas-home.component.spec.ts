import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasHomeComponent } from './atlas-home.component';

describe('AtlasHomeComponent', () => {
  let component: AtlasHomeComponent;
  let fixture: ComponentFixture<AtlasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
