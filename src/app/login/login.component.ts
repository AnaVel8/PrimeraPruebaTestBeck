import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { AdminServiceService } from '../admin-service.service';
import { AdminsComponent } from '../admins/admins.component';
import { ErrorService } from '../error.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminame: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private _servicioAdmin: AdminServiceService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.adminame == '' || this.password == '') {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error'); 
      return
    }

    // Creamos el body
    const admin: AdminsComponent = {
      adminame: this.adminame,
      password: this.password
    }

    this.loading = true;
    this._servicioAdmin.login(admin).subscribe({
      next: (token) => {
        this.router.navigate(['/usuarios'])
        localStorage.setItem('token', token);
        
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  } 
}
