import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTablesComponent } from './atlas-tables.component';

describe('AtlasTablesComponent', () => {
  let component: AtlasTablesComponent;
  let fixture: ComponentFixture<AtlasTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
