import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PizzaApiService {
    private userSubject: BehaviorSubject<string | null>;
    public user: Observable<string | null>;

    constructor(private http: HttpClient){
           this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
           this.user = this.userSubject.asObservable();
         }

         public get userValue() {
             return this.userSubject.value;
         }

    PostMessage(input: any, uri: any) {
       const httpOptions = {
          headers: new HttpHeaders({
            'Response-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Authorization': 'Bearer '+localStorage.getItem('auth')
          })
        };

        console.log(input.value);
        return this.http.post(uri, input.value, httpOptions).pipe(
            map(
                (response) => {
                    if(response) {
                    console.log(response);
                        this.user = input.value.username;
                        return response;
                    }
                    return null;
                },
                (error: any) => {
                    return error;
                }
            )
        )
    }
    GetMessage(uri: any) {
        return this.http.get(uri).pipe(
            map(
                (response) => {
                    if(response) {
                        return response;
                    }
                    return null;
                },
                (error: any) => {
                    return error;
                }
            )
        ).toPromise();
    }

   DeleteMessage(input: any, uri: any) {
      return this.http.delete(uri+"/"+input).pipe(
          map(
              (response) => {
                  if(response) {
                  console.log(response);
                      this.user = input.value.username;
                      return response;
                  }
                  return null;
              },
              (error: any) => {
                  return error;
              }
          )
      )
  }
}
