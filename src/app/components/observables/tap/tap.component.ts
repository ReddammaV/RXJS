import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { map, toArray, pluck, filter, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  obsSubscription: Subscription;
  obsSubscription2: Subscription;
  myColors:any;
  Arr = ['Reddy', 'Aruna', 'Mohan', 'Kumari', 'Raghu'];
  colors = ['red', 'green', 'blue', 'violet', 'cyan']

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.tapSubscribe();
    this.tapColors();
  }

  goBack() {
    this.location.back();
  }

  // Ex - 1
  tapSubscribe() {
    const source = interval(1000);
    this.obsSubscription = source
      .pipe(
        tap(res => {
          if (res == this.Arr.length) {
            this.obsSubscription.unsubscribe();
          }
        }),
        map(data => this.Arr[data])
      )
      .subscribe(res => {
        console.log(res);
        this.apiService.print(res, 'elcontainer')
      })
  }

  // Ex - 2
  tapColors() {
    const source = interval(1000);
    this.obsSubscription2 = source
      .pipe(
        tap(res => {
          this.myColors = this.colors[res];
          if (res == this.colors.length) {
            this.obsSubscription2.unsubscribe();
          }
        }),
        map(data => this.colors[data])
      )
      .subscribe(res => {
        console.log(res);
        this.apiService.print(res, 'elcontainer2')
      })
  }


}
