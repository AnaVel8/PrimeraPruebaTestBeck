import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../servicios.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

export interface Usuarios{
  id?: number;
  name: string;
  apellidos: string;
  edad: number;
  diagnostico: string;

}


 @Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})



export class RegistroUsuariosComponent implements OnInit {


    
  
  

  listUsuarios: Usuarios[]=[];
  loading: boolean = false;

  constructor(private _userService: UsuarioService, private router: Router){
    
  }

  
   ngOnInit(): void {
    this.getListUsuarios();
   }

   getListUsuarios(){
    this.loading = true;
    this._userService.getListUser().subscribe((data: Usuarios[])=>{
        this.listUsuarios = data;
        this.loading = false;
        })
    
  }

  deleteUser(id: number){
    // Preguntar al usuario si está seguro de eliminar
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Realmente deseas eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, procede con la eliminación
        this.loading = true;
        this._userService.deleteUser(id).subscribe(() => {
          this.getListUsuarios();
          this.loading = false;
          Swal.fire(
            '¡Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          );
        }, error => {
          // Manejar errores en caso de que la eliminación falle
          this.loading = false;
          Swal.fire(
            'Error!',
            'Hubo un problema al eliminar el usuario.',
            'error'
          );
        });
      }
    });
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  imprimir(item: any) {
    const doc = new jspdf.jsPDF();
    const filaId = 'fila-' + this.listUsuarios.indexOf(item);
    const fila = document.getElementById(filaId);
  
    if (fila) {
      html2canvas(fila).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 10, 180, 0);
        doc.save('paciente_' + item.id + '.pdf');
      });
    } else {
      console.error('La fila no se encontró:', filaId);
    }
  }
  
}
  









