import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFrameworks } from './ch-frameworks';

describe('ChFrameworks', () => {
  let component: ChFrameworks;
  let fixture: ComponentFixture<ChFrameworks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChFrameworks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChFrameworks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
