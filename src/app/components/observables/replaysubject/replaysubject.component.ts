import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.scss']
})
export class ReplaysubjectComponent implements OnInit {

  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List = [];
  user3List = []

  // subscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;

  // Toggle Properties
  methodInterval: boolean = false;
  toggleSubscription: Subscription;


  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.apiService.videEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    })
  }

  goBack() {
    this.location.back();
  }

  // onVideoAdd
  onVideoAdd(value) {
    // console.log(value);
    this.apiService.videEmit.next(value);
  }

  // user2Subscribe()
  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.apiService.videEmit.subscribe(res => {
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  // user3Subscribe()
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.apiService.videEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  // Toggle Method
  toggleMethod() {
    const broadCastVideos = interval(1000);
    if (!this.methodInterval) {
      this.toggleSubscription = broadCastVideos.subscribe(res => {
        this.apiService.videEmit.next('Video ' + res)
      })
    } else {
      this.toggleSubscription.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;
  }

}
