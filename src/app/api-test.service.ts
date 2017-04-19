import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiTestService {
  
  // resultado da pesquisa
  result = null;

  // usar modulo Http no projeto
  constructor(private http:Http) { }

  // obter filmes
  getMovies(name:string) : Promise<any>
  {

    // pegar filmes do omdbaps.
    return this.http
      .get(`http://www.omdbapi.com/?s=${name}`)
      .toPromise()
      .then(response=>{this.result = response.json()})
      .catch(this.handleError);
  }

  // lidar com erro
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
