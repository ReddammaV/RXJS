import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName: string;

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.apiService.exclusive.next(true);
    // userName
    this.apiService.userName.subscribe(res => {
      this.userName = res;
      console.log(res);
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.apiService.exclusive.next(false);
  }



}
