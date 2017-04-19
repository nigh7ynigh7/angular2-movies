import { Component } from '@angular/core';

// importar servico que mexe com os filmes
import { ApiTestService } from "./api-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // contem template do angular
  styleUrls: ['./app.component.css'],  // contem css do angular
  providers: [ApiTestService]          // contem servico que busca filmes
})
export class AppComponent {
  // titulo do projeto
  title    = 'Name';

  // campo de pesquisa do filme
  movieName = '';

  // lista de filmes
  movies:any[]   = [];

  // colocar o servicos de filmes aqui
  constructor(private service:ApiTestService){}

  // pesquisar os filmes
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
