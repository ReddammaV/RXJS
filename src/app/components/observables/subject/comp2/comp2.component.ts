import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // userName
    this.apiService.userName.subscribe(res => {
      this.userName = res;
      console.log(res);
    })
  }
  onClick(uname){
    console.log(uname.value);
    this.apiService.userName.next(uname.value)
  }

}
