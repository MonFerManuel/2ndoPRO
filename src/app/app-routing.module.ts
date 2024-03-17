import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

//Establecemos el sistema de rutas para el Front

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import ('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
