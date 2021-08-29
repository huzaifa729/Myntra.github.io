import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
     id:any="";
     shou(ids:any){
       if(this.id==ids){
        this.id='';
      }
      else{
       this.id=ids;
       }
     }
}
