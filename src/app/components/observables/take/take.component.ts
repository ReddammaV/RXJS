import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of, timer, fromEvent } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { map, toArray, pluck, filter, tap, take, takeLast, takeUntil } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Reddy', 'Aruna', 'Mohan', 'Kumari', 'Raghu', 'Lucky', 'Anup', 'Neeraj', 'Sakshi'];

  constructor(private apiService: ApiService, private location: Location) { }


  ngOnInit() {
    this.take();
    this.takeLast();
    this.takeUntil();
  }

  goBack() {
    this.location.back();
  }

  // Ex - 1
  take(){
    const source = from(this.randomNames)
    source
    .pipe(
      take(5)
    )
    .subscribe(res => {
      console.log(res);
      this.apiService.print(res, 'elcontainer')
    })
  }

    // Ex - 2
    takeLast(){
      const source = from(this.randomNames)
      source
      .pipe(
        takeLast(5)
      )
      .subscribe(res => {
        console.log(res);
        this.apiService.print(res, 'elcontainer2')
      })
    }

     // Ex - 3
     takeUntil(){
      const source = interval(1000)
      let condition1 = timer(5000)
      let condition2 = fromEvent(document, 'click')

      source
      .pipe(
        map(res => 'Number ' + res),
        takeUntil(condition1)
        // takeUntil(condition2)
      )
      .subscribe(res => {
        console.log(res);
        this.apiService.print(res, 'elcontainer3')
      })
    }

}
