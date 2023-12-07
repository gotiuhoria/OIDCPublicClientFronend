import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from, mergeMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.authService.getAccessToken()).pipe(
          mergeMap((authToken: string | null) => {
            if (authToken) {
              // Clone the request and add the authorization header with the bearer token
              const authRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${authToken}`
                }
              });
    
              // Pass the cloned request to the next handler
              return next.handle(authRequest);
            } else {
              // If there is no token, proceed with the original request
              return next.handle(request);
            }
          })
        );
      }
}
