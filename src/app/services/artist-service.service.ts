import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService {

  private apiURL: string = "api.discogs.com/artists/"; 

  constructor(private http: HttpClient) { }

  public getArtistInfo(artistId: number): Observable<HttpResponse<Artist>> {
    return this.http.get<HttpResponse<Artist>>(this.apiURL + artistId);
  }
}
