import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasPhilosophyComponent } from './atlas-philosophy.component';

describe('AtlasPhilosophyComponent', () => {
  let component: AtlasPhilosophyComponent;
  let fixture: ComponentFixture<AtlasPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
