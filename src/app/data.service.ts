import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  exampleOne() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  exampleTwo() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments',{params:{postId: '1'}})
  }
  exampleThree() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{'body':[]})
  }
  exampleFour() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }
  exampleFive() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{responseType: 'text', headers: {'X-Test':'1'}})
  }
  exampleSix() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }
  exampleSeven() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
