import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ho',
  templateUrl: './ho.component.html',
  styleUrls: ['./ho.component.scss']
})
export class HoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id:any="";
  on(ids:any){
    if(this.id==ids){
      this.id="";
    }
    else{
      this.id=ids;
    }
  }
}
