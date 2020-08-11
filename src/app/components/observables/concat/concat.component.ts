import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { interval, concat } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  constructor(private apiService: ApiService, private location: Location) { }


  ngOnInit() {
    const techVideos = interval(1000).pipe(map(res => 'Tech Video #' + (res+1)),take(5));
    const comedyVideos = interval(1000).pipe(map(res => 'Comedy Video #' + (res+1)),take(3));
    const newsVideos = interval(1000).pipe(map(res => 'News Video #' + (res+1)),take(4));

    // final
    const FinalVideos = concat(techVideos, comedyVideos, newsVideos);

    // subscribe
    FinalVideos.subscribe(res => {
      console.log(res);
      this.apiService.print(res, 'elcontainer')
    })
  }

  goBack() {
    this.location.back();
  }

}
