import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  myValue: any;
  laptop: any;
  asyncawait: any;
  fetchData:any;
  data: any;
  dell = {
    brand: 'Dell',
    harddisk: '2 TB',
    color: 'Black'
  }
  hp = {
    brand: 'HP',
    harddisk: '4 TB',
    color: 'Grey'
  }
  notAvil = {
    brand: 'Not Available',
    status: 'Failed'
  }

  constructor() { }

  ngOnInit() {

    var promise = new Promise((resolve, reject) => {
      const x = 'Hello';
      const y = 'Hello';

      if (x === y) {
        resolve('Value is Success!')
      } else {
        reject('Value is Fail!')
      }
    })

    promise.then((msg) => {
      this.myValue = msg;
      console.log(msg);
    })
      .catch((err) => {
        this.myValue = err;
        console.log(err);
      })
  }

  // Ex-01 laptop example
  DellLaptop() {
    return false
  }

  HpLaptop() {
    return true
  }

  buyLaptop() {
    const newLaptop = new Promise((resolve, reject) => {
      if (this.DellLaptop()) {
        // resolve('Dell Laptop is Available')
        resolve(this.dell.brand + ' Available')
      } else if (this.HpLaptop()) {
        // resolve('Hp Laptop is Available')
        resolve(this.hp.brand + ' Available')
      } else {
        reject(this.notAvil.brand)
      }
    })

    newLaptop.then(msg => {
      this.laptop = msg;
      console.log(msg);
    }).catch(err => {
      this.laptop = err;
      console.log(err);
    })
  }

  // Ex-02 async/ await
  async getData() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => 
      resolve("Hello Async")
      , 1000)
    });

    this.asyncawait = await promise; // wait until the promise resolves (*)

    console.log(this.asyncawait); // "done!"
  }

  // Ex-3 Fetch api
  // async Returns a promise
  async getFetchData(){
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
    // this.fetchData = await res;
    // console.log(this.fetchData);
    try {
      this.fetchData = await res;
      console.log(this.fetchData);
    } catch (err) {
      console.log(err);
    }
  }


}
