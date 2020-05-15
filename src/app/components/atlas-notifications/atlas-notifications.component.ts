import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var ClipboardJS:any;
@Component({
  selector: 'app-atlas-notifications',
  templateUrl: './atlas-notifications.component.html'
})
export class AtlasNotificationsComponent implements OnInit {

  navigationalSelect:string ="info";
  public checked: boolean = false;
  showCode:boolean = false;
  clipboardTargetID:string = "code-info";

  test:boolean = false;
  products: any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    new ClipboardJS('#btnCopy');
    this.httpClient.get("./assets/data/code/notifications.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }
 

  navigationalSelectChange(){
    switch(this.navigationalSelect) { 
      case "info": { 
         //statements; 
         this.clipboardTargetID = 'code-info';
         break; 
      } 
      case "danger": { 
        //statements; 
        this.clipboardTargetID = 'code-danger';
        break; 
      }
      case "caution": { 
      //statements; 
        this.clipboardTargetID = 'code-caution';
        break; 
      } 
      case "success": { 
        this.clipboardTargetID = 'code-success';
         break; 
      } 
      default: { 
         //statements; 
         this.clipboardTargetID = 'code-info';
         break; 
      } 
   } 
  }
  

}
