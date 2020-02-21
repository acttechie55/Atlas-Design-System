import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTypographyComponent } from './atlas-typography.component';

describe('AtlasTypographyComponent', () => {
  let component: AtlasTypographyComponent;
  let fixture: ComponentFixture<AtlasTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
