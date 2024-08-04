import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get('https://evo-academy.wckz.dev/api/cooking-blog/posts', {responseType: 'json'})
  }
  getRecipe(urlId:string) {
    return this.http.get(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${urlId}`, {responseType: 'json'})
  }
}
