import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moedas } from '../interfaces/Moedas';
import { Moeda } from '../interfaces/Moeda';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'
  private apiUrlMoedas = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=Knsels4_Ol-Ny&timePeriod=24h'
  private apiUrlMoedaIndividual = 'https://coinranking1.p.rapidapi.com/coin'
  constructor(private http:HttpClient) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }

  getAllMoedas(): Observable<Moedas> {

    return this.http.get<Moedas>(this.apiUrlMoedas, {
      headers: {
        'X-RapidAPI-Key': '449b84d9d0mshd455bc23e24097bp1e6e08jsn569926707dcb',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      }
    })
  }
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getMoeda(uuid: string): Observable<Moeda> {
    return this.http.get<Moeda>(`${this.apiUrlMoedaIndividual}/${uuid}`, {
      headers: {
        'X-RapidAPI-Key': '449b84d9d0mshd455bc23e24097bp1e6e08jsn569926707dcb',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      }
    })
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
