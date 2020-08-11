import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { map, toArray } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  msg1: any;
  msg2: any;
  myBootcamps: any;
  bootcamps: any;
  todos: any;

  constructor(private apiService: ApiService, private location: Location, private http: HttpClient) { }

  ngOnInit() {
    this.videoData();
    this.mapData();
    this.apiData();
    this.myData();
    this.getData();
    this.getTodos();
  }

  goBack() {
    this.location.back();
  }

  // Ex- 1
  videoData() {
    const broadCastVideos = interval(1000);

    this.sub1 = broadCastVideos
      .pipe(map(data => 'Videos ' + data))
      .subscribe(res => {
        // console.log(res);
        this.msg1 = res;
      })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);
  }

  // Ex - 2
  mapData() {
    const broadCastVideos = interval(1000);
    this.sub2 = broadCastVideos
      .pipe(map(data => data * 3))
      .subscribe(res => {
        // console.log(res);
        this.msg2 = res;
      })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);
  }

  // Ex - 3
  apiData() {
    const members = [
      { id: 1, age: 29, name: 'Reddy' },
      { id: 2, age: 58, name: 'Aruna' },
      { id: 3, age: 68, name: 'Mohan' },
      { id: 4, age: 18, name: 'Raghu' },
      { id: 5, age: 52, name: 'Kumari' },
    ]

    const api = from(members)

    api
      .pipe(map(data => data.name))
      .subscribe(res => {
        // console.log(res);
        this.apiService.print(res, 'elcontainer')
      })
  }

  // Ex- 4 - using map in object in object
  myData() {
    const bootcamps =
    {
      "success": true,
      "count": 4,
      "pagination": {},
      "data": [
        { id: 1, age: 29, name: 'Reddy' },
        { id: 2, age: 58, name: 'Aruna' },
        { id: 3, age: 68, name: 'Mohan' },
        { id: 4, age: 18, name: 'Raghu' },
        { id: 5, age: 52, name: 'Kumari' },
      ]
    }

    const api = of(bootcamps)

    api
      // .pipe(map(res => res.data[0]))
      // .pipe(map(res => res.data[0].name))
      .pipe(
        map(res => res.data),
        toArray()
      )
      .subscribe(res => {
        // console.log(res);
        this.myBootcamps = res[0];
        // console.log(this.myBootcamps);

      })
  }

  // Ex-5 - ApiService devcamper api
  getData() {
    this.apiService.getData()
      .subscribe(res => {
        // console.log(res);
        this.bootcamps = res;
      })
  }

  // Ex- 6 - with http://jsonplaceholder.typicode.com/todos
  // Json Typicode todos result only with id and title (ignore userId and completed)
  getTodos() {
    // check http://jsonplaceholder.typicode.com/todos
    this.http.get('http://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((res: any) => 
          res.map((data) => {
            return {
              id: data.id,
              title: data.title
            }
          })
        )
      )
      .subscribe(res => {
        console.log(res);
        this.todos = res;
      })
  }
}
