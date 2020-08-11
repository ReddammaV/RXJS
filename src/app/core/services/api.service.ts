import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // subject & BehaviourSubject
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Reddy');
  // Replaysubject
  videEmit = new ReplaySubject<any>(3);
  // AsyncSubject
  asyncSubjectEmit = new AsyncSubject();



  // Node devcamper_api - localhost
  url = 'http://localhost:5000/api/v1/bootcamps';



  constructor(private http: HttpClient) { }

  print(val, containerId){
    let el = document.createElement('li');
    el.innerText = val;

    // document.getElementById('elcontainer').appendChild(el);
    document.getElementById(containerId).appendChild(el);
  }

  getData(){
    return this.http.get(this.url)
    .pipe(map((res:any)=> res.data))    
  }

}
