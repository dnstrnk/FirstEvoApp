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
<<<<<<< Updated upstream
  auth(username:any, password:any) {
=======
  auth(username:string, password:string) {
>>>>>>> Stashed changes
    return this.http.post('https://evo-academy.wckz.dev/api/cooking-blog/users/sign',{"username": username,"password": password},{responseType: 'json'})
  }
}
