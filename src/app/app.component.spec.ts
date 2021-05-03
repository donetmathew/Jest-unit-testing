import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ListComponent } from './list/list.component';

describe('App Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let appService: any;

  const mockData = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    },
    {
      userId: 1,
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
      userId: 1,
      id: 7,
      title: 'magnam facilis autem',
      body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
    },
    {
      userId: 1,
      id: 8,
      title: 'dolorem dolore est ipsam',
      body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
      userId: 1,
      id: 9,
      title: 'nesciunt iure omnis dolorem tempora et accusantium',
      body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    },
    {
      userId: 1,
      id: 10,
      title: 'optio molestias id quia eum',
      body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
    },
  ];

  const appMockService = {
    getPost: jest.fn()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ListComponent],
      providers: [{
        provide: AppService,
        useValue: appMockService
      }]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      appService = TestBed.inject(AppService);
    });
  }));


  test('should verify the component to be created', () => {
    expect(component).toBeTruthy();
  });

  test('should verify the title', () => {
    const title = 'New Jest Heading';
    component.title = title;
    appService.getPost.mockReturnValue(of(mockData));
    fixture.detectChanges();
    const navBarHeading = el.query(By.css('.navbar-brand'));
    expect(navBarHeading.nativeElement.textContent).toBe(title);
  });

  test('should verify the post observable', (done) => {
    appService.getPost.mockReturnValue(of(mockData));
    fixture.detectChanges();
    expect(component.posts$).toBeTruthy();
    component.posts$.subscribe((posts) => {
      expect(posts.length).toBe(10);
      expect(posts.length).not.toBe(9);
      done();
    });
  });

  test('should verify the post cards in UI', () => {
    appService.getPost.mockReturnValue(of(mockData));
    fixture.detectChanges();
    const cardList = el.queryAll(By.css('.card'));
    expect(cardList).toBeTruthy();
    expect(cardList.length).toBe(10);
  });

});
