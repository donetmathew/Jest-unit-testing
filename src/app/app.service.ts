import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  
  constructor(private http: HttpClient){
  }

  private arr=[
    {
      title:"Mclaren",
      type:"Car"
    },
    {
      title:"Yamaha",
      type:"Bike"
    },
    {
      title:"BMW",
      type:"car"
    },
    {
      title:"Royal Enfield",
      type:"bike"
    }
  ];

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }

  saveUser(id:Number,body:Object){
    //const body = { title: 'Angular PUT Request Example' };
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+id, body);
  }

  getVehicleData(){
    return of(this.arr);
  }
}
