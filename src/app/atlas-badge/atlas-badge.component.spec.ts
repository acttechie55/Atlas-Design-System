import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasBadgeComponent } from './atlas-badge.component';

describe('AtlasBadgeComponent', () => {
  let component: AtlasBadgeComponent;
  let fixture: ComponentFixture<AtlasBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
