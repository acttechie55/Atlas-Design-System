import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasListsComponent } from './atlas-lists.component';

describe('AtlasListsComponent', () => {
  let component: AtlasListsComponent;
  let fixture: ComponentFixture<AtlasListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
