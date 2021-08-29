import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filt',
  templateUrl: './filt.component.html',
  styleUrls: ['./filt.component.scss']
})
export class FiltComponent implements OnInit {

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
