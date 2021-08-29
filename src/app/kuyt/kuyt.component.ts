import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-kuyt',
  templateUrl: './kuyt.component.html',
  styleUrls: ['./kuyt.component.scss']
})
export class KuytComponent implements OnInit {



 
  
  
  constructor() {
  
  
  }

  ngOnInit(): void {
  }
 
     id:any="";
     show(ids:any){
       if(this.id==ids){
         this.id="";
       }
       else{
         this.id=ids;
       }
     }

}
