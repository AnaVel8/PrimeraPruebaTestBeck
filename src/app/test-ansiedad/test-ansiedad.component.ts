import { Component } from '@angular/core';
import reglasBeck from './reglas-beck.component';
import { PreguntaBeck, preguntasBeck } from './preguntas-beck';
import { Engine } from 'json-rules-engine';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test-ansiedad',
  templateUrl: './test-ansiedad.component.html',
  styleUrl: './test-ansiedad.component.css'
})
export class TestAnsiedadComponent {
  preguntas: PreguntaBeck[] = preguntasBeck;
  respuestasUsuario: number[] = new Array(21).fill(null);
  puntajeTotal: number = 0;
  resultado: string = '';
  todasPreguntasRespondidas: boolean = false;
  mostrarResultadoFlag: boolean = false; // Nuevo flag para mostrar resultado

  constructor() {
    this.preguntas = preguntasBeck;
  }

  evaluarAnsiedad() {
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
            console.log("Resultado obtenido:", this.resultado);
            this.mostrarResultado(); // Llamar a la función para mostrar el resultado
            break;
          }
        }
      })
      .catch(error => {
        console.error('Error al evaluar la ansiedad:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.'
        });
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
      title:'RESULTADO SRP',
      text: this.resultado,
      confirmButtonText: 'OK'
     }).then((result)=>{
      if(result.value){
        location.reload();
      }
     });
    
  }

}
