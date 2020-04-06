import { HttpHeaders } from "@angular/common/http";

export class Constants{
    static BASE_URL : String = 'http://localhost:8080/bookapi';
    static ITEM_URL : String ='';

    static HTTP_OPTION ={
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
    

}