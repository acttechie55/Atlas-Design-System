import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasSampleSiteComponent } from './atlas-sample-site.component';

describe('AtlasSampleSiteComponent', () => {
  let component: AtlasSampleSiteComponent;
  let fixture: ComponentFixture<AtlasSampleSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasSampleSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasSampleSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
