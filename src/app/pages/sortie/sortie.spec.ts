import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sortie } from './sortie';

describe('Sortie', () => {
  let component: Sortie;
  let fixture: ComponentFixture<Sortie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sortie],
    }).compileComponents();

    fixture = TestBed.createComponent(Sortie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
