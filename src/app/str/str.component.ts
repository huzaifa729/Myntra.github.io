import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str',
  templateUrl: './str.component.html',
  styleUrls: ['./str.component.scss']
})
export class StrComponent implements OnInit {

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
