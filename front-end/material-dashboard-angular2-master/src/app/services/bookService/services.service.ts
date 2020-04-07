import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import { Constants } from 'app/models/constats';
import { Item } from 'app/models/item';

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
//add item
addItem(item : Item){
  return this.http.post(Constants.BASE_URL+ '/item/add-item',item,Constants.HTTP_OPTION);
}
//delete item

deleteItem(id){
 return this.http.delete(Constants.BASE_URL + '/item/delete', {params: {id: id}, observe: 'response'});
}


}
