import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationComment } from '../interfaces/comment';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicatorService {
  private serverUrl: string = "http://wwidscluster.dhbw-stuttgart.de:8000/";
  constructor(private http: HttpClient) { }

  public addComment(comment: LocationComment, id: string): Observable<any> {
    let commentElement = {
      name: comment.name,
      text: comment.text
    };
    
    return this.http.post<any>(`${this.serverUrl}addComment`, {
      locationId: id,
      comment: commentElement
    });
  }

  public getLocations(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.serverUrl}stores`);
  }

  public saveStore(newLocation: Store): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}addStore`, {storeElement: newLocation})
  }
}
