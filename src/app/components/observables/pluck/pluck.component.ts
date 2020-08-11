import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { map, toArray, pluck } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  names: any;
  titles: any;

  users = [
    {
      name: 'Reddy', skills: 'Angular', job: {
        title: 'Angular Developer',
        exp: '10 Years'
      }
    },
    {
      name: 'Aruna', skills: 'JavaScript', job: {
        title: 'FrontEnd Developer',
        exp: '8 Years'
      }
    },
    {
      name: 'Mohan', skills: 'Bootstrap', job: {
        title: 'UI Developer',
        exp: '5 Years'
      }
    },
    {
      name: 'Raghu', skills: 'Jquery', job: {
        title: 'Jquery Developer',
        exp: '6 Years'
      }
    },
    {
      name: 'Kumari', skills: 'HTML', job: {
        title: 'HTML Developer',
        exp: '2 Years'
      }
    },
  ]

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.getProperty();
    this.getNestedProperty();
  }

  goBack() {
    this.location.back();
  }

  // Ex - 1
  getProperty() {
    const api = from(this.users)
    api
      .pipe(
        pluck('name'),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.names = res;
      })
  }

  // Ex - 2
  getNestedProperty() {
    const api = from(this.users)
    api
      .pipe(
        pluck('job', 'title'),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.titles = res;
      })
  }

}
