import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/bookService/services.service';
import { Observable } from 'rxjs';
import { Item } from 'app/models/item';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterItemComponent } from '../popupModule/register-item/register-item.component';

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
    this.service.getAllItem().subscribe( res=>{
      console.log(res);
      this.data=res;
    });
  }
  openDialog(id :Number) {
    console.log(id);
    this.dialog.open(RegisterItemComponent, {
      data: {
        id
      }
    });
  }

}
