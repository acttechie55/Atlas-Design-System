import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasGridSystemComponent } from './atlas-grid-system.component';

describe('AtlasGridSystemComponent', () => {
  let component: AtlasGridSystemComponent;
  let fixture: ComponentFixture<AtlasGridSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasGridSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasGridSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
