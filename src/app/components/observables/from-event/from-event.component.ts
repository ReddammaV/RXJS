import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn', {static: true}) addBtn: ElementRef;

  constructor(private location: Location) { }

  ngOnInit() {
    // this.addBtn.nativeElement.style.color = 'red';
    // From Event - Rxjs
    // fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
    //   console.log(res);
    // })
  }

  goBack(){
    this.location.back();
  }

  ngAfterViewInit(){
    // From Event - Rxjs
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      // console.log(res);
      let countVal = 'Video ' + count++;
      this.print(countVal, 'elcontainer');
      this.print(countVal, 'elcontainer2');
    })
  }

  print(val, containerId){
    let el = document.createElement('li');
    el.innerText = val;

    // document.getElementById('elcontainer').appendChild(el);
    document.getElementById(containerId).appendChild(el);
  }

}
