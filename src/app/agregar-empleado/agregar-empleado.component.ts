import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Empleado } from '../empleado';
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {




  form:FormGroup;


  constructor(private fb:FormBuilder, private crudService: CrudServiceService, private router: Router){ 
    this.form = this.formulario();

    console.log(this.form);
   }

  

  formulario(): FormGroup {
    
    return this.fb.group({
      document:['', [Validators.required, Validators.pattern(/^[1-9]\d{0,10}$/), Validators.minLength(6)]],
      nameUser:['', [Validators.required, Validators.minLength(3)]],
      lastName:['', Validators.required],
      phone:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[1-9]\d{0,10}$/)]],
      addressUser:['', Validators.required]

    });
  }


  addEmployee(){
    
    let miEmpleado = this.form.value;
    console.log(miEmpleado);
    this.crudService.agregarEmpleado(miEmpleado).subscribe(respuesta=>{
    this.router.navigate(['lista-empleado']);
    });
  }

}
