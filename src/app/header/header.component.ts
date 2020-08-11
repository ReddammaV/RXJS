import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myexclusive: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.exclusive.subscribe((res) => {
      this.myexclusive = res;
    })
  }

}
