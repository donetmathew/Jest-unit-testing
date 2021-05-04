import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { ContainerService } from './container.service';
import { ModalComponent } from '../modal/modal.component';
import { Store } from '@ngrx/store';
import { AppState } from '../@ngrx/Login-store/login-reducers';
import { isLogin } from '../@ngrx/Login-store/login-selectors';
import { logout } from '../@ngrx/Login-store/login-actions';
import { AuthActions } from '../@ngrx/Login-store/login-action-type';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  title = 'Jest Testing';
  posts$: Observable<any> = new Observable();
  postData: any[] = [];
  isLogin$: Observable<boolean> = of(false);

  constructor(
    private service: ContainerService,
    private modalService: NgbModal,
    private store: Store<AppState>) {}

  ngOnInit(): void{
    this.posts$ = this.service.getPost();
    this.posts$.subscribe((res: any[]) => {
      this.postData = res.slice(0, 10);
    });
    this.isLogin$ = this.store.select(isLogin);
  }

  open(): void{
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.closed.subscribe(post => {
      if (post.title && post.body) {
        this.postData.unshift(post);
      }
    });
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
