import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import {HttpClientModule} from '@angular/common/http';
import { ProvedorComponent } from './components/provedor/provedor.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import {RouterModule, Routes} from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'productos', component: ProvedorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProvedorComponent,
    FormProductoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
