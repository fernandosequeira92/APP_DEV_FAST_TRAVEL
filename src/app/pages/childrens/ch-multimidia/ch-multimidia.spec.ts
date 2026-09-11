import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChMultimidia } from './ch-multimidia';

describe('ChMultimidia', () => {
  let component: ChMultimidia;
  let fixture: ComponentFixture<ChMultimidia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChMultimidia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChMultimidia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
