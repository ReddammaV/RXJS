import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { interval, of, from } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent implements OnInit {
  users = [
    { name: 'Reddy', skills: 'Angular, HTML, Bootstrap' },
    { name: 'Aruna', skills: 'CSS, JS' },
    { name: 'Mohan', skills: 'Node JS, Photoshop' }
  ]
  intervalArray: any;
  ofArray: any;
  fromArray: any;

  constructor(private location: Location) { }

  ngOnInit() {
    this.interval();
    this.of();
    this.from();
  }

  goBack() {
    this.location.back();
  }

  // Interval
  interval() {
    const source = interval(1000);
    source
      .pipe(
        // take is used for to allow - interval how many time we need
        take(5),
        // toArray is used for change sting to array
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.intervalArray = res;
      })
  }

  // of()
  of() {
    const source = of('Reddy', 'Aruna', 'Mohan')
    source
      .pipe(toArray())
      .subscribe(res => {
        this.ofArray = res;
      })
  }

  // from()
  from() {
    const source = from(this.users);
    source
      .pipe(toArray())
      .subscribe(res => {
        console.log(res);
        this.fromArray = res
      })
  }

}
