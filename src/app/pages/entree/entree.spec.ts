import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entree } from './entree';

describe('Entree', () => {
  let component: Entree;
  let fixture: ComponentFixture<Entree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entree],
    }).compileComponents();

    fixture = TestBed.createComponent(Entree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
