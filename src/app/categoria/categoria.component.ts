import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: string [];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {

    this.httpService.get('../src/data/categoryList.json').subscribe(
      data => {
        this.categorias = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

}
