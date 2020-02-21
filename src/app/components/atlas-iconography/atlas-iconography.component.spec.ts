import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasIconographyComponent } from './atlas-iconography.component';

describe('AtlasIconographyComponent', () => {
  let component: AtlasIconographyComponent;
  let fixture: ComponentFixture<AtlasIconographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasIconographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasIconographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
