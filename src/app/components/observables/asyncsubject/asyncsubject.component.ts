import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.scss']
})
export class AsyncsubjectComponent implements OnInit {
  asyncSubjectEmit: any;

  constructor(private apiService: ApiService, private location: Location) { }


  ngOnInit() {
    this.apiService.asyncSubjectEmit.subscribe(res => {
      this.asyncSubjectEmit = res;
      console.log(this.asyncSubjectEmit);
    })
  }

  goBack() {
    this.location.back();
  }

  // onVideoAdd
  onVideoAdd(value) {
    console.log(value);
    this.apiService.asyncSubjectEmit.next(value);
  }

  // onComplete
  onComplete(){
    this.apiService.asyncSubjectEmit.complete();
  }

}
