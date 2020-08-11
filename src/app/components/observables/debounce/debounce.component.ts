import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of, timer, fromEvent } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {

  reqData: any;
  reqData2: any;
  @ViewChild('myInput', { static: true }) myInput: ElementRef
  @ViewChild('myInput2', { static: true }) myInput2: ElementRef

  constructor( private apiService: ApiService, private location: Location) { }


  ngOnInit() {
    this.debounceTime();
    this.distinctUntilChanged();
  }

  goBack() {
    this.location.back();
  }

  // Ex- 1
  debounceTime() {
    const search = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    )

    search.subscribe(res => {
      console.log(res);
      this.reqData = res;

      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    })
  }

  // Ex- 2
  distinctUntilChanged() {
    const search = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    search.subscribe(res => {
      console.log(res);
      this.reqData2 = res;

      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    })
  }

}
