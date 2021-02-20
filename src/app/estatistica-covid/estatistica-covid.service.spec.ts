import { TestBed } from '@angular/core/testing';

import { EstatisticaCovidService } from './estatistica-covid.service';

describe('DadosService', () => {
  let service: EstatisticaCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatisticaCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
