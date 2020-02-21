import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasHeaderComponent } from './atlas-header.component';

describe('AtlasHeaderComponent', () => {
  let component: AtlasHeaderComponent;
  let fixture: ComponentFixture<AtlasHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
