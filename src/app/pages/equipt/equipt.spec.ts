import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipt } from './equipt';

describe('Equipt', () => {
  let component: Equipt;
  let fixture: ComponentFixture<Equipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Equipt],
    }).compileComponents();

    fixture = TestBed.createComponent(Equipt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
