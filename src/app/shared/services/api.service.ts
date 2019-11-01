import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService{

    constructor(private http: HttpClient){

    }
  // sendRequest() :Observable<any[]>{
       //return this.http.get('https://jsonplaceholder.typicode.com/todos/');

   // }
}