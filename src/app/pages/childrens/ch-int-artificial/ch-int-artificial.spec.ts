import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChIntArtificial } from './ch-int-artificial';

describe('ChIntArtificial', () => {
  let component: ChIntArtificial;
  let fixture: ComponentFixture<ChIntArtificial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChIntArtificial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChIntArtificial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
