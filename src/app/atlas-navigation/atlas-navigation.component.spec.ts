import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasNavigationComponent } from './atlas-navigation.component';

describe('AtlasNavigationComponent', () => {
  let component: AtlasNavigationComponent;
  let fixture: ComponentFixture<AtlasNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
