import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  mostrarVentanaEmergente(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      confirmButtonText: 'OK'
    });
  }
  
}
