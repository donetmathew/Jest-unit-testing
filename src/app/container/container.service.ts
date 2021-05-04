import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ContainerService {

  constructor(private http: HttpClient){
  }

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  savePost(id: number, body: any): Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id, body);
  }
}
