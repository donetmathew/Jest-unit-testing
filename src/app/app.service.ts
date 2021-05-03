import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient){
  }

  private arr = [
    {
      title: 'Mclaren',
      type: 'Car'
    },
    {
      title: 'Yamaha',
      type: 'Bike'
    },
    {
      title: 'BMW',
      type: 'car'
    },
    {
      title: 'Royal Enfield',
      type: 'bike'
    }
  ];

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  savePost(id: number, body: any): Observable<any> {
    // const body = { title: 'Angular PUT Request Example' };
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id, body);
  }
}
