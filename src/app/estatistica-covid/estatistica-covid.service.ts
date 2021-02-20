import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { EstatisticaCovid } from './estatistica-covid.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EstatisticaCovidService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getDados() {
    return this.http.get<EstatisticaCovid>(this.API_URL + 'records/LATEST');
  }
}
