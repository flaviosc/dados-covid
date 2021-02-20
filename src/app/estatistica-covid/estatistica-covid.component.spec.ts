import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaCovidComponent } from './estatistica-covid.component';

describe('EstatisticaCovidComponent', () => {
  let component: EstatisticaCovidComponent;
  let fixture: ComponentFixture<EstatisticaCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatisticaCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
