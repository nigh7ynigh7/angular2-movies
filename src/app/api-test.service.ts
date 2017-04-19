import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiTestService {
  
  result = null;

  constructor(private http:Http) { }

  getMovies(name:string) : Promise<any>
  {
    return this.http
      .get(`http://www.omdbapi.com/?s=${name}`)
      .toPromise()
      .then(response=>{this.result = response.json()})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
