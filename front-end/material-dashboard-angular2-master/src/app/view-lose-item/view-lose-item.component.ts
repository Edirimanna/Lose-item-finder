import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/bookService/services.service';
import { Observable } from 'rxjs';
import { Item } from 'app/models/item';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterItemComponent } from '../popupModule/viewItem/register-item.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-view-lose-item',
  templateUrl: './view-lose-item.component.html',
  styleUrls: ['./view-lose-item.component.css']
})
export class ViewLoseItemComponent implements OnInit {

  data: Observable<Item[]>

  constructor(private service: HttpService ,public dialog: MatDialog) { }

  ngOnInit(){
    console.log("line-1")

    //add Item in the pool
    this.service.getAllItem().subscribe( res=>{
      console.log(res);
      this.data=res;
    });
  }
  //open popup module
  openDialog(id :Number) {
    console.log(id);
    this.dialog.open(RegisterItemComponent, {
      data: {
        id
      }
    });
  }

  //delete item
  deleteItem(itemId){
    console.log("delete-line-1");
    console.log(itemId);
    this.service.deleteItem(itemId).subscribe(res =>{
      alert("deleted Item");
      console.log(res)
    }, error => console.log('There was an error: ', error))
    
  }

}
