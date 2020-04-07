import { Component, OnInit } from '@angular/core';
import { Item } from 'app/models/item';
import { HttpService } from 'app/services/bookService/services.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item;

  constructor(private itemService : HttpService) {

    this.item= new Item();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Line-1");
    console.log(this.item.finderName);
    this.itemService.addItem(this.item).subscribe(res=>{
      console.log(res);

    })
  }

}
