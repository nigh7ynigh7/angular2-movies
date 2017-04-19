import { Component } from '@angular/core';
import { ApiTestService } from "./api-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiTestService]
})
export class AppComponent {
  title    = 'Name';
  movieName = '';
  movies:any[]   = [];
  constructor(private service:ApiTestService){}

  find(name:string)
  {
    this.service.getMovies(name).then(()=>{
      console.log(this.service.result.Search);
      this.movies = this.service.result.Search as any[];
    }).catch(()=>{
      this.movies = [];
    })
  }

}
