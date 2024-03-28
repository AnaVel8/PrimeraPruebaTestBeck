import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsComponent } from '../admins/admins.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrl: './registro-admin.component.css'
})
export class RegistroAdminComponent implements OnInit{

  adminame: string='';
  password: string='';
  confirmPassword: string='';
  loading: boolean = false;

  constructor(private _servicioAdmin: AdminServiceService ,
              private router: Router,
              private _errorService: ErrorService
              ){}

  ngOnInit(): void {
   }
    addAdmin(){
      //validar los campos

      if(this.adminame ==''|| this.password == ''|| this.confirmPassword == ''){
        Swal.fire('Error','Todos los campos son Obligatorios','error')
        return;
      }
         //validar contraseñas iguales
      if(this.password != this.confirmPassword){
        Swal.fire('Error','la contraseña no coincide','error')
        return;
      }


      //crear objeto admin

      const admin: AdminsComponent = {
        adminame: this.adminame,
        password: this.password
      }
      //console.log(admin);
      
      this.loading = true;
      this._servicioAdmin.signIn(admin).subscribe({
        next: (v) => {
          this.loading = false;
          Swal.fire(`El usuario ${this.adminame} fue registrado con exito`, 'Usuario registrado');
          this.router.navigate(['/login']);
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this._errorService.msjError(e);
        }
      })
    }

}


