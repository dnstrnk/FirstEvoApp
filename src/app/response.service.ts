import { Injectable } from '@angular/core';
import {ResponseServer} from './response-server'

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  constructor() { }
  info:ResponseServer[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
  ]
}
