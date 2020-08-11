import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { map, toArray, pluck, filter } from 'rxjs/operators';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  userByLength: any;
  userByGender: any;
  userByLimit: any;

  users = [
    { id: 1, name: 'Reddy', gender: 'Female' },
    { id: 2, name: 'Aruna', gender: 'Female' },
    { id: 3, name: 'Anup', gender: 'Male' },
    { id: 4, name: 'Raghu', gender: 'Male' },
    { id: 5, name: 'Mohan', gender: 'Male' },
    { id: 6, name: 'Neha', gender: 'Female' },
    { id: 7, name: 'Aswin', gender: 'Male' },
    { id: 8, name: 'Janet', gender: 'Female' },
    { id: 9, name: 'Neeraj', gender: 'Male' },
    { id: 10, name: 'Sakshi', gender: 'Female' },
  ]

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.filterByLength();
    this.filterByGender();
    this.filterByLimit();
  }

  goBack() {
    this.location.back();
  }

  // Ex - 1
  filterByLength() {
    const api = from(this.users);
    api
      .pipe(
        filter(data => data.name.length >= 5),
        toArray()        
      )
      .subscribe(res => {
        console.log(res);
        this.userByLength = res;
      })
  }

  // Ex - 2
  filterByGender() {
    const api = from(this.users);
    api
      .pipe(
        filter(data => data.gender == 'Female'),
        toArray()        
      )
      .subscribe(res => {
        console.log(res);
        this.userByGender = res;
      })
  }

  // Ex - 3
  filterByLimit() {
    const api = from(this.users);
    api
      .pipe(
        // filter(data => data.id >= 6),
        filter(data => data.id <= 6),
        toArray()        
      )
      .subscribe(res => {
        console.log(res);
        this.userByLimit = res;
      })
  }

}
