import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jest Testing';
  posts$: Observable<any> = new Observable();
  postData: any[] = [];

  constructor(private service: AppService, private modalService: NgbModal) {}

  ngOnInit(): void{
    this.posts$ = this.service.getPost();
    this.posts$.subscribe((res: any[]) => {
      this.postData = res.slice(0, 10);
    });
  }

  open(): void{
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.closed.subscribe(post => {
      this.postData.unshift(post);
    });
  }
}

