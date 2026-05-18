import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layoutdash } from './layoutdash';

describe('Layoutdash', () => {
  let component: Layoutdash;
  let fixture: ComponentFixture<Layoutdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutdash],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutdash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
