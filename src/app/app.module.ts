import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MascotasModule } from './mascotas/mascotas.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MascotasModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
