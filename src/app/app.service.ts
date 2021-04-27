import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  
  constructor(private http: HttpClient){
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }

  saveUser(id:Number,body:Object){
    //const body = { title: 'Angular PUT Request Example' };
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+id, body);
  }
}
