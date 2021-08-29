import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  isShowMore=true
  constructor() { }

  ngOnInit(): void {
  }

   on(){
     this.isShowMore = !this.isShowMore;
   }
}
