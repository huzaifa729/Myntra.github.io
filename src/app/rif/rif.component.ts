import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rif',
  templateUrl: './rif.component.html',
  styleUrls: ['./rif.component.scss']
})
export class RifComponent implements OnInit {

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
