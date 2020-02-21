import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFooterComponent } from './atlas-footer.component';

describe('AtlasFooterComponent', () => {
  let component: AtlasFooterComponent;
  let fixture: ComponentFixture<AtlasFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
