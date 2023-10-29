import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';

const routes: Routes = [
  { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'agregar-empleado',component:AgregarEmpleadoComponent},
  {path:'lista-empleado', component:ListaEmpleadoComponent},
  {path:'editar-empleado/:id',component:EditarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
