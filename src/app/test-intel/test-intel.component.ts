import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

/*@Component({
  selector: 'app-test-intel',
  templateUrl: './test-intel.component.html',
  styleUrl: './test-intel.component.css'
})*/

@Component({
  selector: 'app-test-intel',
  templateUrl: './test-intel.component.html',
  styleUrls: ['./test-intel.component.css'] // Cambio realizado aquí
})

export class TestIntelComponent {

  preguntaActual: number = 0;

  
  

  

  questions :string[]= [

    '1. Puedo recordar algo mejor si lo escribo',
    '2. Al leer, oigo las palabras en mi cabeza o leo en voz alta',
    '3. Necesito hablar las cosas para entenderlas mejor ',
    '4. No me gusta leer o escuchar instrucciones prefiero simplemente comenzar a hacer las cosas',
    '5. Puedo visualizar imagenes en mi cabeza',
    '6. Puedo estudiar mejor si escucho musica',
    '7. necesito recreos frecuentes cuando estudio ',
    '8. Pienso mejor cuando tengo la libertad de moverme, estar sentado detras de un escritorio no e spara mi',
    '9. Tomo muchas notas de lo que leo y escucho ',
    '10. Me ayuda mirar a la persona que esta hablando, me mantiene enfocado',
    '11. Se me hace dificil entender lo que unampesona esta diciendo si hay ruidos al rededor',
    '12. Prefiero que alguien me diga como tengo que hacer las cosas que leer instrucciones',
    '13. Prefiero escuchar una conferencia o una grabacion a leer un libro ',
    '14. Cuando no puedo pensar en una palabra especifica, uso mis manos y llamo al objeto "coso"',
    '15.Puedo seguir facilemente a una persona que esta hablando auqnue mi cabeza este hacia abajo o no me encuentre mirando',
    '16. Es mas facil para mi hacer un trabajo en un lugar tranquilo',
    '17. Me resulta facil enteder mapas, tablas y graficos',
    '18. Cuando comienzo un articulo o un libro, prefiero espiar la ultima pagina',
    '19. Recuerdo mejor lo que la gente dice que su aspecto',
    '20. recuerdo mejor si estudio en voz alta con alguien',
    '21. Tomo notas, pero nunca vuelvo a releerlas',
    '22. Cuando estoy concentrado leyendo o escribiendo la radio me molesta',
    '23. Me resulta dificil crear imagenes en mi cabeza',
    '24. Me resulta decir en voz alta las tareas que tengo para hacer',
    '25. Mi cuaderno y mi ecritorio pueden verse un desatre, pero se exactamente donde esta cada cosa',
    '26. cuando estoy en un examenpuedo ver la pagina en el libro de textos y la respuesta',
    '27. No puedo  recordar una broma lo suficiente para contarla luego ',
    '28. Al aprender algo nuevo, prefiero eschar la informacion, luego leer y luego hacerlo',
    '29. M e gusta completar una tarea antes de comenzar otra',
    '30. Uso mis dedos para contar y muevo los labios cuando leo',
    '31. No me gusta releer mi trabajo',
    '32. Cuando estoy tratando de recordar algo nuevo por ejemplo, un numero de telefono, me ayuda formarme una imagen ',
    '33. Para obtener una nota extra prefiero grabar un informe a escribirlo',
    '34. Fantaseo en clase ',
    '35. Para obtener una claificacion extra prefiero crear un proyecto a escribir un informe',
    '36. Cuando tengo una gran idea, debo escribirla inmediantamente, o la olvido con facilidad'
  ];

  options:string[]=[

    "Casi Nunca",
    "Rara vez",
    "A veces",
    "Frecuentemente",
    "Casi Siempre"
  ];

  
  imagenes: string[] = [
    'assets/images1.jpg',
    'assets/images2.jpg',
    
  ];


  //inicializa con ceros segun la cantidad de preguntas
  selections:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0];

  calculateSum(){

    //Verificar que no falten respuestas
    if(this.selections.includes(0)){
      //al menos una respuesta
      Swal.fire({
        icon:'error',
        title:'ERROR',
        text: 'Por favor complete todas las respuestas antes de continuar',
        confirmButtonText: 'OK'
       })


    }else{

    //Guardar las selecciones en  el locastorage
        localStorage.setItem('questionnaireSelections', JSON.stringify(this.selections));

        //Obtener 

    //console.log(this.selections)los datos del localStore

    const resultadoStr= localStorage.getItem('questionnaireSelections')
    if(resultadoStr !==null){
      const resultados = JSON.parse(resultadoStr);
      //inicializa 3 arrays para las sumas

      const visual =[1,5,9,10,11,16,17,22,26,27,32,36];
      const auditivo =[2,3,12,13,15,19,20,23,24,28,29,33];
      const kinestesico =[4,6,7,8,14,18,21,25,30,31,34,35];

      let sumaVisual = 0;
      let sumaAuditivo = 0;
      let sumaKinestesico = 0;

      for(let i = 0; i < resultados.length; i++){
        const resultado = resultados[i];

        if(visual.includes(i+1)){
          sumaVisual +=resultado;
      } else if(auditivo.includes(i+1)){
        sumaAuditivo +=resultado;
      } else if(kinestesico.includes(i+1)){
        sumaKinestesico +=resultado;
      }

      

    }
//encuantra el mayos de las trees sumas
    let mayor = Math.max(sumaVisual, sumaAuditivo, sumaKinestesico);
    let mensaje ='';

    if(mayor === sumaVisual){
      mensaje= 'El tipo predominante es visual';
    } else if(mayor === sumaAuditivo){
      mensaje= 'El tipo predominante es Auditivo';
    }
    else if(mayor === sumaKinestesico){
      mensaje= 'El tipo predominante es Kinestesico';
    }


    console.log('Suma Visual', sumaVisual);
    console.log('Suma Auditivo', sumaAuditivo);
    console.log('Suma Kinestesico', sumaKinestesico);
    console.log('Mensaje', mensaje);

 Swal.fire({
  icon:'success',
  title:'RESULTADO SRP',
  text: mensaje,
  confirmButtonText: 'OK'
 }).then((result)=>{
  if(result.value){
    localStorage.removeItem('questionnaireSelections');
    location.reload();
  }
 });

}

    }
}
navegarPregunta(delta: number) {
  // Verificar si se está intentando avanzar a una pregunta válida
  if (delta === 1 && this.selections[this.preguntaActual] === 0) {
      Swal.fire({
          icon: 'warning',
          title: 'Oops',
          text: 'Por favor, selecciona una respuesta antes de pasar a la siguiente pregunta.'
      });
  } else {
      const nuevaPregunta = this.preguntaActual + delta;
      if (nuevaPregunta >= 0 && nuevaPregunta < this.questions.length) {
          this.preguntaActual = nuevaPregunta;
      }
  }
}



}
