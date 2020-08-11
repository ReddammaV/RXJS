import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private apiService: ApiService, private location: Location) { }


  ngOnInit() {
    const techVideos = interval(2000).pipe(map(res => 'Tech Video #' + (res+1)),take(5));
    const comedyVideos = interval(3000).pipe(map(res => 'Comedy Video #' + (res+1)),take(3));
    const newsVideos = interval(3500).pipe(map(res => 'News Video #' + (res+1)),take(4));

    // final
    const FinalVideos = merge(techVideos, comedyVideos, newsVideos);

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
