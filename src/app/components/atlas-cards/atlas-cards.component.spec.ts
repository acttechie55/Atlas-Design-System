import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasCardsComponent } from './atlas-cards.component';

describe('AtlasCardsComponent', () => {
  let component: AtlasCardsComponent;
  let fixture: ComponentFixture<AtlasCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
