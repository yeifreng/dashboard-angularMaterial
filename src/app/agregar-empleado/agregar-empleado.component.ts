import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder){ 
    this.form = this.formulario();
   }

  

  formulario(): FormGroup {
    
    return this.form = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[1-9]\d{6,10}$/)]]

    });
  }



  enviar(){
    console.log(this.form.value.name, this.form.value.email, this.form.value.phone);
  }

}
