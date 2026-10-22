import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Traitementencours } from './traitementencours';

describe('Traitementencours', () => {
  let component: Traitementencours;
  let fixture: ComponentFixture<Traitementencours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Traitementencours],
    }).compileComponents();

    fixture = TestBed.createComponent(Traitementencours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
