import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/bookService/services.service';
import { Observable } from 'rxjs';
import { Item } from 'app/models/item';

@Component({
  selector: 'app-view-lose-item',
  templateUrl: './view-lose-item.component.html',
  styleUrls: ['./view-lose-item.component.css']
})
export class ViewLoseItemComponent implements OnInit {

  data: Observable<Item[]>

  constructor(private service: HttpService) { }

  ngOnInit(){
    console.log("line-1")
    this.service.getAllItem().subscribe( res=>{
      console.log(res);
      this.data=res;
    });
  }

}
