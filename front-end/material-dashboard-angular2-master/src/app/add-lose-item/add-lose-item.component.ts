import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddItemComponent } from 'app/popupModule/add-item/add-item.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-add-lose-item',
  templateUrl: './add-lose-item.component.html',
  styleUrls: ['./add-lose-item.component.css']
})
export class AddLoseItemComponent implements OnInit {

  constructor(public dialog: MatDialog) {

   }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AddItemComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}
