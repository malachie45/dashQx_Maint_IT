import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienIT } from './technicien-it';

describe('TechnicienIT', () => {
  let component: TechnicienIT;
  let fixture: ComponentFixture<TechnicienIT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicienIT],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicienIT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
