import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../registro-usuarios/registro-usuarios.component';
import { UsuarioService } from '../servicios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrl: './usuario-editar.component.css'
})
export class UsuarioEditarComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string= 'Agregar';



constructor(private fb: FormBuilder, 
  private _userService: UsuarioService,
  private router: Router,
  private toastr: ToastrService,
  private aRouter: ActivatedRoute){


  this.form = this.fb.group({
    name:['',Validators.required],
    apellidos:['',Validators.required],
    edad:[null,Validators.required],
    diagnostico:['',Validators.required]
  })
  //aRouter.snapshot.paramMap.get('id');
  this.id = Number(aRouter.snapshot.paramMap.get('id'));
  //console.log(aRouter.snapshot.paramMap.get('id'));
}
  ngOnInit(): void {

    if(this.id != 0){
      //editar
      this.operacion= 'Editar';
      this.getUser(this.id);
      
      
    }
  }

  getUser(id: number){
    this.loading=true;
    this._userService.getUser(id).subscribe((data:Usuarios)=>{
//console.log(data);
this.loading= false;
this.form.setValue({
  name: data.name,
  apellidos: data.apellidos,
  edad: data.edad,
  diagnostico: data.diagnostico
})
 })
  }

  agregarUsuario() {
    const usuario: Usuarios = {
      name: this.form.value.name,
      apellidos: this.form.value.apellidos,
      edad: this.form.value.edad,
      diagnostico: this.form.value.diagnostico
    };
  
    if (this.id !== 0) {
      // Editar usuario
      this.loading = true;
      usuario.id = this.id;
      this._userService.updateUsuario(this.id, usuario).subscribe(() => {
        this.loading = false;
        Swal.fire({
          icon: 'success',
          title: 'Cambios guardados',
          text: `El usuario ${usuario.name} fue editado con éxito.`,
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/usuarios']);
        });
      }, error => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al editar el usuario.',
          confirmButtonText: 'Aceptar'
        });
      });
    } else {
      // Agregar usuario
      this.loading = true;
      this._userService.saveUser(usuario).subscribe(() => {
        this.loading = false;
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: `El usuario ${usuario.name} fue registrado con éxito.`,
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/usuarios']);
        });
      }, error => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al registrar el usuario.',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }

}
