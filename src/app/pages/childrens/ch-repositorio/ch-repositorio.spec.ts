import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChRepositorio } from './ch-repositorio';

describe('ChRepositorio', () => {
  let component: ChRepositorio;
  let fixture: ComponentFixture<ChRepositorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChRepositorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChRepositorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
