import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { concatAll, map, concatMap, delay } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 1 -Map
    source
      .pipe(map(res => this.getData(res)))
      .subscribe(res => res.subscribe(res2 => {
        // console.log(res2);
        this.apiService.print(res2, 'elcontainer')
      }))

    // Ex - 2 -Map + ConcatAll
    source
      .pipe(
        map(res => this.getData(res)),
        concatAll()
      )
      .subscribe(res => {
        // console.log(res);
        this.apiService.print(res, 'elcontainer2')
      })

    // Ex - 3 -mergeMap
    source
      .pipe(concatMap(res => this.getData(res)))
      .subscribe(res => {
        console.log(res);
        this.apiService.print(res, 'elcontainer3')
      })


  }

  // You can place here api - this is another observable - here i'm using of
  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }

  goBack() {
    this.location.back();
  }
}
