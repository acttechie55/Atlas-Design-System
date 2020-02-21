import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasSpacingComponent } from './atlas-spacing.component';

describe('AtlasSpacingComponent', () => {
  let component: AtlasSpacingComponent;
  let fixture: ComponentFixture<AtlasSpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasSpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
