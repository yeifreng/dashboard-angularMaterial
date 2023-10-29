import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  url:string = 'http://localhost/empleados-main/';
  
  //intercambio de informacion por medio de protocolo http
  constructor(private clienteHttp:HttpClient) { }

  agregarEmpleado(datosEmpleado:Empleado):Observable<Empleado>{
    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    return this.clienteHttp.post<Empleado>(this.url+"?insertar=1",datosEmpleado);
  }

  obtenerEmpleado():Observable<Empleado[]>{
  return this.clienteHttp.get<Empleado[]>(this.url)
  }

  eliminarEmpleado(id:any):Observable<any>{
    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    return this.clienteHttp.get(this.url+"?borrar="+id);
  }

  traerEmpleado(id:any):Observable<any>{
    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    return this.clienteHttp.get(this.url+"?consultar="+id);
  }

  actualizarEmpleado(id:any,datosEmpleado:Empleado):Observable<any>{
    //se envia la información por metodo post
    //por medio de la función insertar se envian los datos del empleado
    return this.clienteHttp.post(this.url+"?actualizar="+id,datosEmpleado);
  }
}
