import { HttpClient } from '@angular/common/http';
import { isNgContainer } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistResult, ArtistResultArray, Artsit } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private _artistUrl = "http://localhost:8080/api/artist/"
  constructor(private _HttpClient : HttpClient) { }

  getAll () : Observable<ArtistResultArray> {
    return this._HttpClient.get<ArtistResultArray>(this._artistUrl);
  }
  getById (id : number) : Observable<ArtistResult> {
    return this._HttpClient.get<ArtistResult>(this._artistUrl+id)
  }
  create (artistToCreate: Artsit) : Observable<ArtistResult> {
    return this._HttpClient.post<ArtistResult>(this._artistUrl, artistToCreate)
  }
  update (id: number, artistToUpdate: Artsit) : Observable<any>  {
    return this._HttpClient.put<any>(this._artistUrl+id, artistToUpdate)
  }
  delete (id: number) : Observable<any> {
    return this._HttpClient.delete<any>(this._artistUrl+id)
  }
}
