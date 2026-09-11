import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChDeveloper } from './ch-developer';

describe('ChDeveloper', () => {
  let component: ChDeveloper;
  let fixture: ComponentFixture<ChDeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChDeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChDeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
