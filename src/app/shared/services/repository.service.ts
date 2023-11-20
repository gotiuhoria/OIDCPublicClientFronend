import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { EnvironmentUrlService } from './environment-url.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService, private _authService: AuthService) { }
  public getData = (route: string) => {
      return from(
        this._authService.getAccessToken()
        .then(token => {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress), { headers: headers }).toPromise();
        })
      );
    }
 
  private createCompleteRoute = (route: string, envAddress: string) =>    {
    return `${envAddress}/${route}`;
  }
}