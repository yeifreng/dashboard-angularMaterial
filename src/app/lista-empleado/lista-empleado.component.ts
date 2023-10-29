import { CrudServiceService } from './../crud-service.service';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})



export class ListaEmpleadoComponent {

displayedColumns: string[] = ['document', 'name', 'lastName', 'phone', 'address'];
  dataSource = new MatTableDataSource<Empleado>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private crudService: CrudServiceService){

  this.dataSource.paginator = this.paginator

  this.crudService.obtenerEmpleado().subscribe( respuesta =>{
    this.dataSource.data = respuesta;
    console.log(respuesta);
  });

}
  
}

