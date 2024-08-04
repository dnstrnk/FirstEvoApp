import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class FetchRecipeResolver implements Resolve<any> {
  constructor(private dataService: DataService, public router: Router) {}
  urlId: any;
  route: any;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataService.getRecipe(route.params['id'])
  }
}
