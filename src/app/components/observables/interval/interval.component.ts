import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { interval, Subscription, timer } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {
  Obmsg: any;
  videoSubscription: Subscription;

  constructor(private location: Location, private apiService: ApiService) { }

  ngOnInit() {
    // interval
    // const broadcastVideos = interval(1000);
    // timer(delay, interval)
    const broadcastVideos = timer(5000,1000);

    this.videoSubscription = broadcastVideos.subscribe(res => {
      console.log(res);
      this.Obmsg = 'Video ' + res;

      // from apiService appendChild for 'li'
      this.apiService.print(this.Obmsg, 'user1');
      this.apiService.print(this.Obmsg, 'user2');
      this.apiService.print(this.Obmsg, 'user3');

      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(){
    // this.apiService.print(this.Obmsg, 'user1').unsubscribe();
  }

}
