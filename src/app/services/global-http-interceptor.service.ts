import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpHeaders, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';
import { Router } from "@angular/router";
import { UsersService } from "./users.service";

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor(public router: Router, private usersService: UsersService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usersService.getToken();
    if(token!==null && req.method !== 'GET') {
      console.log("hay token");
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
      }); 
  
      const cloneReq = req.clone({headers});

      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });

      return next.handle(cloneReq);
    }else{
      return next.handle(req);
    }
    
  }
}
