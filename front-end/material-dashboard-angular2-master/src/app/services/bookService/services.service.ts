import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import { Constants } from 'app/models/constats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }


//get All Lose Item

getAllItem(): Observable<any>{
 return this.http.get(Constants.BASE_URL+ '/item/all-item');
  
}


}
