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
  correoDestino: string = '';
  sintomasSomaticos: number = 0; // Propiedad de la clase para almacenar los síntomas somáticos
  sintomasCognitivos: number = 0; // Propiedad de la clase para almacenar los síntomas cognitivos
  preguntaActual: number = 0;

  constructor(private http: HttpClient) {
    this.preguntas = preguntasBeck;
  }
  imagenes: string[] = [
    'assets/depresion/1.jpg',
    'assets/depresion/2.jpg',
    'assets/depresion/3.jpg',
    'assets/depresion/4.jpg',
    'assets/depresion/5.jpg',
    'assets/depresion/6.jpg',
    'assets/depresion/7.jpg',
    'assets/depresion/8.jpg',
    'assets/depresion/9.jpg',
    'assets/depresion/10.jpg',
    'assets/depresion/11.jpg',
    'assets/depresion/12.jpg',
    'assets/depresion/13.jpg',
    'assets/depresion/14.jpg',
    'assets/depresion/15.jpg',
    'assets/depresion/16.jpg',
    'assets/depresion/17.jpg',
    'assets/depresion/18.jpg',
    'assets/depresion/19.jpg',
    'assets/depresion/20.jpg',
    'assets/depresion/21.jpg',
    
  ];

  evaluarDepresion() {
    if (!this.todasPreguntasRespondidas) {
      Swal.fire({
        icon: 'warning',
        title: 'Opss',
        text: 'Por favor, responde todas las preguntas antes de ver el resultado.'
      });
      return;
    }
  
    // Calcular el puntaje total
    this.puntajeTotal = this.respuestasUsuario.reduce((total, respuesta) => total + (respuesta || 0), 0);
  
    // Contadores para síntomas somáticos y cognitivos
    this.sintomasSomaticos = 0;
    this.sintomasCognitivos = 0;
  
    // Iterar sobre las respuestas del usuario y contar los síntomas somáticos y cognitivos
    this.respuestasUsuario.forEach((respuesta, index) => {
      // Verificar si el ítem es somático o cognitivo
      if (index < 13) {
        this.sintomasCognitivos += respuesta || 0;
      } else {
        this.sintomasSomaticos += respuesta || 0;
      }
    });
  
    // Ejecutar el motor de reglas para determinar el resultado
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
  
            // Mostrar diálogo de confirmación y el resultado
            Swal.fire({
              icon: 'question',
              title: '¿Desea enviar el resultado por correo electrónico?',
              showCancelButton: true,
              confirmButtonText: 'Sí',
              cancelButtonText: 'No',
              html: `Síntomas somáticos: ${this.sintomasSomaticos}<br>Síntomas cognitivos: ${this.sintomasCognitivos}<br>Resultado: ${this.resultado}`
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
        console.error('Error al evaluar la depresión:', error);
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
    this.http.post<any>('http://localhost:3000/correo/enviar-diagnostico', { 
     correo: this.correoDestino,
     resultado: this.resultado,
     sintomasSomaticos: this.sintomasSomaticos,
     sintomasCognitivos: this.sintomasCognitivos }).subscribe({
      next: (response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Correo enviado',
            text: 'El resultado se ha enviado por correo electrónico correctamente.'
          }).then(() => {
          
            window.location.href = '/#niveles-depresion';
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
      icon: 'success',
      title: 'RESULTADO Test de Depresion',
      text: this.resultado,
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.value) {
        window.location.href = '/#niveles-depresion';
        // Esto redirigirá a la ruta principal con el fragmento #niveles-depresion
      }
    });
  }
  

  navegarPregunta(delta: number) {
    // Verificar si se está intentando avanzar a una pregunta válida
    if (delta === 1 && this.respuestasUsuario[this.preguntaActual] === null) {
        Swal.fire({
            icon: 'warning',
            title: 'Opss',
            text: 'Por favor, selecciona una respuesta antes de pasar a la siguiente pregunta.'
        });
    } else {
        const nuevaPregunta = this.preguntaActual + delta;
        if (nuevaPregunta >= 0 && nuevaPregunta < this.preguntas.length) {
            this.preguntaActual = nuevaPregunta;
        }
    }
}

}
