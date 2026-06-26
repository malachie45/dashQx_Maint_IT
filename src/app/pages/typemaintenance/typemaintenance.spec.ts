import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typemaintenance } from './typemaintenance';

describe('Typemaintenance', () => {
  let component: Typemaintenance;
  let fixture: ComponentFixture<Typemaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typemaintenance],
    }).compileComponents();

    fixture = TestBed.createComponent(Typemaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
