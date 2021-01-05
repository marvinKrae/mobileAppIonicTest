import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicatorService {
  private serverUrl: string = "http://wwidscluster.dhbw-stuttgart.de:8000/";
  constructor(private http: HttpClient) { }

  public getLocations(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.serverUrl}stores`);
  }

  public saveStore(newLocation: Store): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}addStore`, {storeElement: newLocation})
  }
}
