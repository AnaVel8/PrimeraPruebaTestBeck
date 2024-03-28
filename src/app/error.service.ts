import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  msjError(e: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error. Por favor, inténtelo de nuevo más tarde.';
    
    if (e.error && e.error.msg) {
      errorMessage = e.error.msg;
    } else if (e.status === 401) {
      errorMessage = 'Acceso denegado. Por favor, inicie sesión.';
    }
    
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage
    });
  }
}
