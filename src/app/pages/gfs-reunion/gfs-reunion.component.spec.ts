import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfsReunionComponent } from './gfs-reunion.component';

describe('GfsReunionComponent', () => {
  let component: GfsReunionComponent;
  let fixture: ComponentFixture<GfsReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GfsReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GfsReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
