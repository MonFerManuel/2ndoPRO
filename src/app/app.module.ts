import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




// COMPONENTES

import { SharedModule } from './components/shared/shared.module';

//importamos módulos --> importante - SharedModeule lo creé yo para compartir más modulos y que esta sección quedara más limpia

@NgModule({
  declarations: [
    AppComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
