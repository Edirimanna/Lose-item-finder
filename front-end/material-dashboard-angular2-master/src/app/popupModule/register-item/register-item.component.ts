import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from 'app/services/bookService/services.service';
import { Observable } from 'rxjs';
import { Item } from 'app/models/item';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: ['./register-item.component.css']
})
export class RegisterItemComponent implements OnInit {

  popDeta:  Observable<Item[]>

  constructor( private service : HttpService , @Inject(MAT_DIALOG_DATA) public data: Item) {
    this.service.getAllItem().subscribe(res=>{
      console.log("popup");
      console.log(data.id);
      this.popDeta=res;

    })
   }

  ngOnInit(){
  }

}
