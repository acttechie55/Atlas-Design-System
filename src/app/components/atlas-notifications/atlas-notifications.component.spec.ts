import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasNotificationsComponent } from './atlas-notifications.component';

describe('AtlasNotificationsComponent', () => {
  let component: AtlasNotificationsComponent;
  let fixture: ComponentFixture<AtlasNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
