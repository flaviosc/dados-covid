import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Dados } from '../interfaces/dados.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getDados() {
    return this.http.get<Dados>(this.API_URL + 'records/LATEST');
  }
}
