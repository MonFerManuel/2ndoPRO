import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeatstoreComponent } from './beatstore/beatstore.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CompraComponent } from './compra/compra.component';
import { RegistroComponent } from '../registro/registro.component';
import { DashboardAdminComponent } from 'src/app/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from '../login/login.component';


//declaramos los componentes

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    BeatstoreComponent,
    ContactoComponent,
    CompraComponent,
    RegistroComponent,
    DashboardAdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  
   
  ]
})

//exportamos el modulo del dashboard
export class DashboardModule { }
