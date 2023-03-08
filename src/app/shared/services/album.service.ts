import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private _HttpClient : HttpClient) { }
  private _albumUrl = "http://localhost:8080/api/album/"
  getAll() :  Observable<any> {
    return this._HttpClient.get<any>(this._albumUrl);
  }
  
  getById(id: number) : Observable<any> {
    return this._HttpClient.get(this._albumUrl+id)
  }
}
