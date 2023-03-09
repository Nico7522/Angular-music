import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, AlbumArray, AlbumResult } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private _HttpClient : HttpClient) { }
  private _albumUrl = "http://localhost:8080/api/album/"
  getAll() :  Observable<AlbumArray> {
    return this._HttpClient.get<AlbumArray>(this._albumUrl);
  }
  
  getById(id: number) : Observable<AlbumResult> {
    return this._HttpClient.get<AlbumResult>(this._albumUrl+id)
  }

  create(albumToCreate: Album) : Observable<AlbumResult> {
    return this._HttpClient.post<AlbumResult>( this._albumUrl ,albumToCreate)
  }

  update(id: number, albumToUpdate: Album) : Observable<any> {
    return this._HttpClient.put<any>(this._albumUrl+id, albumToUpdate)
  }

  delete(id: number): Observable<any> {
    return this._HttpClient.delete(this._albumUrl+id)
  }
}
