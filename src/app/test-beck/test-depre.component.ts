import { Engine } from 'json-rules-engine';
import { PreguntaBeck, preguntasBeck } from './preguntas-beck';
import reglasBeck from './reglas-beck.component';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-beck',
  templateUrl: './test-depre.component.html',
  styleUrls: ['./test-depre.component.css']
})
export class TestBeckComponent {
  preguntas: PreguntaBeck[] = preguntasBeck;
  respuestasUsuario: number[] = new Array(21).fill(null);
  puntajeTotal: number = 0;
  resultado: string = '';
  todasPreguntasRespondidas: boolean = false;
  mostrarResultadoFlag: boolean = false; // Nuevo flag para mostrar resultado
  enviarCorreoFlag: boolean = false; // Flag para indicar si se desea enviar el correo
  correoDestino: string = ''; // Correo electrónico destino para enviar el resultado

  constructor(private http: HttpClient) {
    this.preguntas = preguntasBeck;
  }

  evaluarDepresion() {
    if (!this.todasPreguntasRespondidas) {
      Swal.fire({
        icon: 'warning',
        title: 'Opss',
        text: 'Por favor, responde todas las preguntas antes de ver el resultado.'
      });
      return;
    }
  
    this.puntajeTotal = this.respuestasUsuario.reduce((total, respuesta) => total + (respuesta || 0), 0);
    const engine = new Engine();
    reglasBeck.forEach((regla: any) => engine.addRule(regla));
    const facts = { puntajeTotal: this.puntajeTotal };
  
    engine
      .run(facts)
      .then(results => {
        for (const result of results.events) {
          if (result?.params?.['resultado']) {
            this.resultado = result.params['resultado'];
            this.mostrarResultadoFlag = true;

            // Mostrar diálogo de confirmación
            Swal.fire({
              icon: 'question',
              title: '¿Desea enviar el resultado por correo electrónico?',
              showCancelButton: true,
              confirmButtonText: 'Sí',
              cancelButtonText: 'No'
            }).then((result) => {
              if (result.isConfirmed) {
                this.enviarCorreoFlag = true; // Marcar que se desea enviar el correo
                this.solicitarCorreoDestino(); // Solicitar el correo destino al usuario
              } else {
                // Si el usuario no desea enviar el correo, muestra el resultado
                this.mostrarResultado();
              }
            });

            break;
          }
        }
      })
      .catch(error => {
        console.error('Error al evaluar la depresion:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.'
        });
      });
  }

  // Función para solicitar el correo destino al usuario
  solicitarCorreoDestino() {
    Swal.fire({
      icon: 'question',
      title: 'Ingrese su correo electrónico',
      input: 'email',
      inputPlaceholder: 'Correo electrónico',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      preConfirm: (correo) => {
        this.correoDestino = correo;
        this.enviarResultadoPorCorreo(); // Enviar el resultado por correo electrónico
      }
    });
  }

  // Función para enviar el resultado por correo electrónico
  enviarResultadoPorCorreo() {
    // Realizar la solicitud HTTP para enviar el correo electrónico
    
    

    this.http.post<any>('http://localhost:3000/correo/enviar-diagnostico', { correo: this.correoDestino, resultado: this.resultado }).subscribe({
      next: (response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Correo enviado',
            text: 'El resultado se ha enviado por correo electrónico correctamente.'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al enviar el correo electrónico',
            text: 'Ha ocurrido un error al enviar el resultado por correo electrónico.'
          });
        }
      },
      error: (error) => {
        console.error('Error al enviar el resultado por correo electrónico:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al enviar el resultado por correo electrónico. Por favor, inténtalo de nuevo más tarde.'
        });
      }
    });
  }

  responderPregunta(preguntaIndex: number, respuestaValor: number) {
    this.respuestasUsuario[preguntaIndex] = respuestaValor;
    this.validarRespuestas();
  }

  validarRespuestas() {
    // Verificar si todas las preguntas han sido respondidas al menos una vez
    this.todasPreguntasRespondidas = this.respuestasUsuario.every(respuesta => respuesta !== null);
  }

  mostrarResultado() {
    Swal.fire({
      icon:'success',
      title:'RESULTADO Test de Depresion',
      text: this.resultado,
      confirmButtonText: 'OK'
     }).then((result)=>{
      if(result.value){
        location.reload();
      }
     });
    
  }

}