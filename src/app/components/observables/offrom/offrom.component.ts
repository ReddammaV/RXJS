import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { of, from } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-offrom',
  templateUrl: './offrom.component.html',
  styleUrls: ['./offrom.component.scss']
})
export class OffromComponent implements OnInit {
  obMsg: any;

  constructor(private location: Location, private apiService: ApiService) { }

  ngOnInit() {
    // of
    this.ofString();
    this.ofObject();
    // from
    this.fromArray();
    this.fromPromise();
    this.fromString();
  }

  goBack() {
    this.location.back();
  }

  // of example:1
  ofString() {
    const obs1 = of('Reddy', 'Aruna', 'Mohan');
    obs1.subscribe(res => {
      // console.log(res);
      this.apiService.print(res, 'elcontainer')
    })
  }

  // of example:2
  ofObject(){
    const obs2 = of({a: 'Reddy', b:'Aruna', c:'Mohan'});
    obs2.subscribe(res => {
      this.obMsg = res;
      // console.log(res);
    })
  }

  // from-array
  fromArray(){
    const obs3 = from(['Aruna', 'Mohan', 'Reddy'])
    obs3.subscribe(res => {
      // console.log(res);
      this.apiService.print(res, 'elcontainer3')
    })
  }

  // from-promise
  fromPromise(){
    const promise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })

    const obs4 = from(promise);
    obs4.subscribe(res => {
      // console.log(res);
      this.apiService.print(res, 'elcontainer4')
    })
  }

  // from -string
  fromString(){
    const obs5 = from('Welcome Reddy')
    obs5.subscribe(res=>{
      console.log(res);
      this.apiService.print(res, 'elcontainer5')
    })
  }




}
