import { TestBed } from "@angular/core/testing";
import {AppService} from './app.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ComponentFactoryResolver } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

describe('ApiService',()=>{

    let ApiService :AppService;
    let httpTestingController: HttpTestingController;
    let mockData = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }];

    beforeEach(()=>{
      //TestBed creates an angular environment
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[
                AppService
            ]
        })
        ApiService = TestBed.inject(AppService); //to retrieve instance of service from Angular
        httpTestingController =TestBed.inject(HttpTestingController);
    });

    it('should exist', () => {
        expect(ApiService).toBeDefined();
    });

  //   it('test data', () => {
  //     expect(12).toBe(13);
  // });

    it('it should retrieve all value',(done)=>{
        ApiService.getPost().subscribe((res:any)=>{                        
            expect(res).toBeTruthy();
            const user=res.find((item:any)=> item.id == 4);
            expect(user.title).toBe("et porro tempora");
            done();
        });
        const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts'); // it checks whether the api is called only once and returns mock http req.     
        expect(req.request.method).toEqual("GET");
        req.flush(mockData); // pass data to the mock api created
    });


    it('should save the user',(done)=>{

      const change = { title: 'Angular PUT Request Example' };
      ApiService.savePost(2,change).subscribe((data:any)=>{
          expect(data).toBeTruthy();
          expect(data.id).toBe(2);
          done();
      });
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/2');
      expect(req.request.method).toEqual("PUT");
      expect(req.request.body.title).toEqual(change.title);
      req.flush({...mockData[1],...change}); //trigger the mock request is done by flush method.

    })

    it('should give an error if save course fails',()=>{
      const change = { title: 'Angular PUT Request Example' };

      ApiService.savePost(12,change).subscribe(()=> fail("Save user api failed"),//to fail the saveCourse
        (error:HttpErrorResponse)=>{
          expect(error.status).toBe(500);
        }) //error block gets executed once fapi failed
        const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/12');
        expect(req.request.method).toEqual("PUT");
        req.flush('Save course failed',{status:500,statusText:"Internal server error"})
    })

    afterEach(() => {
      httpTestingController.verify();
  });
   
})