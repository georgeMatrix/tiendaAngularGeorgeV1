import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import {HttpClientModule} from '@angular/common/http';
import { ProvedorComponent } from './components/provedor/provedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProvedorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
