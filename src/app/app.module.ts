import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HeaderLateralComponent } from './header-lateral/header-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    HeaderLateralComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
