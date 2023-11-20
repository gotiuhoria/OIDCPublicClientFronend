import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, map } from 'rxjs';
import { Image } from '../shared/image';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public isUserAuthenticated: boolean = false;
  public dataFromApi: string | undefined = "empty";

  constructor(
    private _authService: AuthService,
    private _client: HttpClient) {}
  ngOnInit(): void {
    this._authService.loginChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  public getDataFromApi(): void
  {
    from(
      this._authService.getAccessToken()
      .then(token => {
        const headers = new HttpHeaders()
          .set('Authorization', `Bearer ${token}`);
        return this._client.get<Image>("https://localhost:7075/api/images/gettext", { headers: headers })
        .subscribe((data: Image) => this.dataFromApi =  data.Title);
      })
    );
  }

  public login = () => {
    this._authService.login();
  }

  public logout = () => {
    this._authService.logout();
  }
}
