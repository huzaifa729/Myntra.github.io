import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  isShowMore=true
  constructor() { }

  ngOnInit(): void {
  }
  on(){
    this.isShowMore = !this.isShowMore;
  }
}
