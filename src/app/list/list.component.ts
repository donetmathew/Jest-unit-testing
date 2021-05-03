import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() postData: any = null;

//   list:Array<any>=[
//     {
//       title: "Angular"
//     },
//     {
//       title:"React"
//     },
//     {
//       title:"Vue"
//     },
//     {
//       title:"Vue"
//     }
//   ]
//  public vehicleData:any;
//  public bike:any;
//  public car:any;
//   constructor(private serv : AppService) { }

  ngOnInit(): void {
    // this.serv.getVehicleData().subscribe((data)=>{
    //   this.vehicleData=data;
    //   this.bike = this.vehicleData.filter( (el: { type: string; }) => el.type == "bike")
    //   this.car = this.vehicleData.filter( (el: { type: string; }) => el.type == "car")
    // })
  }

}
