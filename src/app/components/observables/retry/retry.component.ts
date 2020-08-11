import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription, interval, from, of, timer, fromEvent } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { map, toArray, pluck, filter, tap, take, takeLast, takeUntil, retry, retryWhen, delay, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  users: any;
  fetching: boolean = false;
  status = 'No Data';

  constructor(private apiService: ApiService, private location: Location, private http: HttpClient) { }


  ngOnInit() {
    // this.fetchJson();
  }

  goBack() {
    this.location.back();
  }

  fetchJson(){
    this.fetching = true;
    this.http.get('http://jsonplaceholder.typicode.com/users/1')
    .pipe(
      // retry(4)
      retryWhen(err => err.pipe(
        delay(1000),
        scan((retryCount) => {
          if(retryCount >=5){
            throw err;
          } else {
            retryCount = retryCount + 1;
            console.log('retryCount => ' + retryCount);
            this.status = 'Retrying Attemp #' + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    )
    .subscribe(res =>{
      this.users = res;
      console.log(res);
      this.status = 'Data Fetched';
      this.fetching = false;
    },
    (err)=> {
      console.log(err);
      this.fetching = false;
      this.status = 'Problem Fetching Data';
    })
  }

}
