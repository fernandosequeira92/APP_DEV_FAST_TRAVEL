import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFerramentas } from './ch-ferramentas';

describe('ChFerramentas', () => {
  let component: ChFerramentas;
  let fixture: ComponentFixture<ChFerramentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChFerramentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChFerramentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
