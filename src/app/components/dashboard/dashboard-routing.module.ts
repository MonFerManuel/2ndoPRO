import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeatstoreComponent } from './beatstore/beatstore.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CompraComponent} from './compra/compra.component';
import { RegistroComponent } from '../registro/registro.component';
import { LoginComponent } from '../login/login.component';
import { DashboardAdminComponent } from 'src/app/dashboard-admin/dashboard-admin.component';

//sistema de rutas hija para el lazy loading
const routes: Routes = [
  { path: '', component: DashboardComponent, children: [

      {path: '', component: InicioComponent},
      {path: 'beatstore', component: BeatstoreComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: 'compra', component: CompraComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'dashboardAdmin', component: DashboardAdminComponent}
  ]}
  
];

//exportamos las rutas hijas para que el app routing se vincule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
