import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, map, throwError} from 'rxjs';
import { Header } from 'primeng/api';
import { ApiNameSpace } from 'src/app/model/api.model';

@Injectable({
  providedIn: 'root'
})
//<T> para aceptar un parametro generico//
export class apiService <T> {

  constructor(
    private http: HttpClient,
  ) { }

  postService(paramsReq: ApiNameSpace.Params): Observable<T>{
    const headers = new HttpHeaders({
      accept: 'application/json',
    }); 

    const { url, params, body } = paramsReq;
    const options = {
      headers,
      params
    }

    return this.http.post<T>(url, body, options).pipe(map(res => res),
    catchError(this.handerError)
    );
  }

  getService(paramsReq: ApiNameSpace.Params): Observable<T>{
    const headers = new HttpHeaders({
      accept: 'application/json',
    }); 

    const { url, params } = paramsReq;
    const options = {
      headers,
      params
    }

    return this.http.get<T>(url, options).pipe(map(res => res),
    catchError(this.handerError)
    );
  }

  private handerError(err: HttpErrorResponse){
    console.log(err.error);
    return throwError(() => err);
  }
}
