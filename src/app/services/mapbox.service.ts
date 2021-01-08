import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  private serverUrl: string = "https://api.mapbox.com/";
  private mapbox_access_token = "pk.eyJ1IjoiYXBnMTc3IiwiYSI6ImNraWlrOGN5dTA2eGUyeHF1enJ3dGhocDAifQ.us00PS-Gl522-LTz_RNJQQ";
  constructor(private http: HttpClient) { }

  public getLocations(storeElement: Store): Observable<string[]> {
    return new Observable((observer)=>{
      const endpoint = "mapbox.places";
      this.http.get<any>(`${this.serverUrl}geocoding/v5/${endpoint}/${storeElement.address}.json?access_token=${this.mapbox_access_token}`).subscribe(
        data => {
          if (data.features.length) {
            const coordinates = data.features[0].center
            storeElement.coordinates = coordinates;
            observer.next(coordinates)
            observer.complete();
          } else {
            observer.error("error")
          }
        },
        error => {
          observer.error(error)
        }
      )
    })
  }
}
