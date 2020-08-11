import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  userName: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // userName
    this.apiService.userName.subscribe(res => {
      this.userName = res;
      console.log(res);
    })
  }
  
  onClick(uname) {
    console.log(uname.value);
    this.apiService.userName.next(uname.value)
  }

}
