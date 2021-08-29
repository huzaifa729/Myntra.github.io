import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flap',
  templateUrl: './flap.component.html',
  styleUrls: ['./flap.component.scss']
})
export class FlapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  id:any = '';
  accordion(ids:any){
 if(this.id == ids){
    this.id = '';
 }
 else{
  this.id = ids;
 }
  }
 
 
}
