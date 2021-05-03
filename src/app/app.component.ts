import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jest-demo';
  postData: any[] = [];

  constructor(private serv: AppService, private modalService: NgbModal) {

  }

  ngOnInit(): void{
    this.serv.getPost().subscribe((res: any[]) => {
      console.log(res);
      this.postData = res;
    });

    // this.serv.saveUser(2,{ title: 'Angular PUT Request Example' }).subscribe((data)=>{
    //   console.log(data);

    // })
  }

  open(): void{
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
    modalRef.closed.subscribe(post => {
      this.postData.unshift(post);
    });
  }
}

