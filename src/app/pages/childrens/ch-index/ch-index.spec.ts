import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChIndex } from './ch-index';

describe('ChIndex', () => {
  let component: ChIndex;
  let fixture: ComponentFixture<ChIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
