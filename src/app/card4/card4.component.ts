import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss']
})
export class Card4Component implements OnInit {
  isShowMore=true
  constructor() { }

  ngOnInit(): void {
  }
  on(){
    this.isShowMore = !this.isShowMore;
  }
}
