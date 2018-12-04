import { Component } from '@angular/core';

// import { CategoriaService } from './service/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ ]
})
export class AppComponent {
  title = 'NutriWp';

  constructor(
    // private categoria: CategoriaService
  ) {
  }

}
