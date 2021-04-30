import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppService } from '../app.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let el:DebugElement;
  const vehicleData=[
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

  beforeEach(async () => {
    const appServiceSpy= jest.spyOn(AppService,'getVehicleData')
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers:[{provide:AppService, useValue:appServiceSpy}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement; //to get native el
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all list items',()=>{
      const cards =el.queryAll(By.css(".course-list")); //query selector of angular teesting mod to get dom elements
      expect(cards).toBeTruthy();
      expect(cards.length).toBe(4);
  })

  it('should display all vehicleData',()=>{

  })
});
