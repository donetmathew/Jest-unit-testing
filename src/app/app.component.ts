import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jest-demo';

  constructor(private serv:AppService){

  }

  ngOnInit(){
    this.serv.getUsers().subscribe((res)=>{
      console.log(res);
    });

    this.serv.saveUser(2,{ title: 'Angular PUT Request Example' }).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
