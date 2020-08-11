import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  techStatus: any;
  techStatus2: any;
  names: any;
  nameStatus: any;
  sub2: Subscription;

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.manual();
    this.customInterval();
    this.randomNames();
  }

  goBack() {
    this.location.back();
  }

  // for Observable it returns three subscribe,error,completion
  // Syntax Below
  // .subscribe(data)
  // .error(err)
  // .complete()

  // Ex-1 - Manual
  manual() {
    // create() - is a keyword to create custom Observable
    const cusObs1 = Observable.create(data => {
      setTimeout(() => {
        data.next('Angular')
      }, 1000);
      setTimeout(() => {
        data.next('TypeScript')
      }, 2000);
      setTimeout(() => {
        data.next('HTML & CSS')
        data.complete()
        // this.techStatus = 'completed';
      }, 3000);
      setTimeout(() => {
        data.next('Bootstrap')
        data.error(new Error('Limit Exceed'))
        // this.techStatus = 'error';
      }, 4000);
      setTimeout(() => {
        data.next('Java Script')
      }, 5000);
    })

    cusObs1.subscribe(res => {
      // console.log(res);
      this.apiService.print(res, 'elcontainer')
    },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    )
  }

  // Ex- 2 - Custom Interval
  customInterval() {
    const Array = ['Angular', 'TypeScript', 'HTML & CSS', 'Bootstrap', 'Java Script']
    const cusObs2 = Observable.create(res => {
      let count = 0;
      setInterval(() => {
        // res.next('data Emit ' + count)     
        res.next(Array[count])

        // error
        if (count >= 2) {
          res.error('Error Emit');
          // this.techStatus2 = 'error';
        }

        // complete
        if (count >= 4) {
          res.complete()
          // this.techStatus2 = 'completed'
        }
        count++

      }, 1000)
    })

    this.sub2 = cusObs2.subscribe(data => {
      // console.log(data);
      this.apiService.print(data, 'elcontainer2')
    },
      (err) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed'
      })
  }

  // Ex- 3 - Random Names
  randomNames() {
    const namesArray = ['Reddy', 'Aruna', 'Mohan', 'Doe', 'Smith']
    const cusObs3 = Observable.create(data => {
      let count = 0;
      setInterval(() => {
        data.next(namesArray[count]);

        // error
        if (count >= 5) {
          data.error('Error Emit')
        }

        // complete
        if (count >= 4) {
          data.complete()
        }

        count++
      }, 1000)
    })

    // subscribe
    cusObs3.subscribe(res => {
      console.log(res);
      this.names = res;
    },
      (err) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      })
  }


  ngOnDestroy() {
    this.sub2.unsubscribe();
  }

}
