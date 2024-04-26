// preguntas-beck.ts
export interface PreguntaBeck {
  pregunta: string;
  respuestas: { valor: number, descripcion: string }[];
}

export const preguntasBeck: PreguntaBeck[] = [
  {
    pregunta: "1. Tristeza",
    respuestas: [
      { valor: 0, descripcion: "No me siento triste" },
      { valor: 1, descripcion: "Me siento triste gran parte del tiempo" },
      { valor: 2, descripcion: "Me siento triste todo el tiempo" },
      { valor: 3, descripcion: " Me siento tan triste o soy tan infeliz que no puedo soportarlo" }
    ]
  },
  {
    pregunta: "2. Pesimismo",
    respuestas: [
      { valor: 0, descripcion: "No estoy desalentado respecto del mi futuro" },
      { valor: 1, descripcion: "Me siento más desalentado respecto de mi futuro que lo que solía estarlo" },
      { valor: 2, descripcion: "No espero que las cosas funcionen para mi" },
      { valor: 3, descripcion: "Siento que no hay esperanza para mi futuro y que sólo puede empeorar" }
    ]
  },
  {
    pregunta: "3. Fracaso",
    respuestas: [
      { valor: 0, descripcion: "No me siento como un fracasado" },
      { valor: 1, descripcion: "He fracasado más de lo que hubiera debido" },
      { valor: 2, descripcion: "Cuando miro hacia atrás, veo muchos fracasos" },
      { valor: 3, descripcion: "Siento que como persona soy un fracaso total" }
    ]
  },
  {
    pregunta: "4. Pérdida de Placer",
    respuestas: [
      { valor: 0, descripcion: "Obtengo tanto placer como siempre por las cosas de las que disfruto" },
      { valor: 1, descripcion: "No disfruto tanto de las cosas como solía hacerlo" },
      { valor: 2, descripcion: "Obtengo muy poco placer de las cosas que solía disfrutar" },
      { valor: 3, descripcion: "No puedo obtener ningún placer de las cosas de las que solía disfrutar" }
    ]
  },
  {
    pregunta: "5. Sentimientos de Culpa",
    respuestas: [
      { valor: 0, descripcion: "No me siento particularmente culpable" },
      { valor: 1, descripcion: "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho" },
      { valor: 2, descripcion: "Me siento bastante culpable la mayor parte del tiempo" },
      { valor: 3, descripcion: "Me siento culpable todo el tiempo" }
    ]
  },
  {
    pregunta: "6. Sentimientos de Castigo",
    respuestas: [
      { valor: 0, descripcion: "No siento que este siendo castigado" },
      { valor: 1, descripcion: "Siento que tal vez pueda ser castigado" },
      { valor: 2, descripcion: "Espero ser castigado" },
      { valor: 3, descripcion: "Siento que estoy siendo castigado" }
    ]
  },
  {
    pregunta: "7. Disconformidad con uno mismo",
    respuestas: [
      { valor: 0, descripcion: "Siento acerca de mi lo mismo que siempre" },
      { valor: 1, descripcion: "He perdido la confianza en mí mismo" },
      { valor: 2, descripcion: "Estoy decepcionado conmigo mismo" },
      { valor: 3, descripcion: "No me gusto a mí mismo" }
    ]
  },
  {
    pregunta: "8. Autocrítica",
    respuestas: [
      { valor: 0, descripcion: "No me critico ni me culpo más de lo habitual" },
      { valor: 1, descripcion: "Estoy más crítico conmigo mismo de lo que solía estarlo" },
      { valor: 2, descripcion: "Me critico a mí mismo por todos mis errores" },
      { valor: 3, descripcion: "Me culpo a mí mismo por todo lo malo que sucede" }
    ]
  },
  {
    pregunta: "9. Pensamientos o Deseos Suicidas",
    respuestas: [
      { valor: 0, descripcion: "No tengo ningún pensamiento de matarme" },
      { valor: 1, descripcion: "He tenido pensamientos de matarme, pero no lo haría " },
      { valor: 2, descripcion: " Querría matarme" },
      { valor: 3, descripcion: "Me mataría si tuviera la oportunidad de hacerlo" }
    ]
  },
  {
    pregunta: "10. Llanto",
    respuestas: [
      { valor: 0, descripcion: "No lloro más de lo que solía hacerlo" },
      { valor: 1, descripcion: "Lloro más de lo que solía hacerlo" },
      { valor: 2, descripcion: "Lloro por cualquier pequeñez." },
      { valor: 3, descripcion: "Siento ganas de llorar pero no puedo" }
    ]
  },
  {
    pregunta: "11. Agitación",
    respuestas: [
      { valor: 0, descripcion: " No estoy más inquieto o tenso que lo habitual" },
      { valor: 1, descripcion: "Me siento más inquieto o tenso que lo habitual" },
      { valor: 2, descripcion: "Estoy tan inquieto o agitado que me es difícil quedarme quieto" },
      { valor: 3, descripcion: "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento" }
    ]
  },
  {
    pregunta: "12. Pérdida de Interés",
    respuestas: [
      { valor: 0, descripcion: "No he perdido el interés en otras actividades o personas" },
      { valor: 1, descripcion: "Estoy menos interesado que antes en otras personas o cosas" },
      { valor: 2, descripcion: "He perdido casi todo el interés en otras personas o cosas." },
      { valor: 3, descripcion: "Me es difícil interesarme por algo" }
    ]
  },
  {
    pregunta: "13. Indecisión",
    respuestas: [
      { valor: 0, descripcion: "Tomo mis propias decisiones tan bien como siempre" },
      { valor: 1, descripcion: "Me resulta más difícil que de costumbre tomar decisiones" },
      { valor: 2, descripcion: "Encuentro mucha más dificultad que antes para tomar decisiones" },
      { valor: 3, descripcion: "Tengo problemas para tomar cualquier decisión" }
    ]
  },
  {
    pregunta: "14. Desvalorización",
    respuestas: [
      { valor: 0, descripcion: "No siento que yo no sea valioso" },
      { valor: 1, descripcion: "No me considero a mi mismo tan valioso y útil como solía considerarme" },
      { valor: 2, descripcion: "Me siento menos valioso cuando me comparo con otros" },
      { valor: 3, descripcion: "Siento que no valgo nada" }
    ]
  },
  {
    pregunta: "15. Pérdida de Energía",
    respuestas: [
      { valor: 0, descripcion: "Tengo tanta energía como siempre" },
      { valor: 1, descripcion: "Tengo menos energía que la que solía tener" },
      { valor: 2, descripcion: "No tengo suficiente energía para hacer demasiado" },
      { valor: 3, descripcion: "No tengo energía suficiente para hacer nada" }
    ]
  },
  
  {
    pregunta: "16. Cambios en el patrón de sueño",
    respuestas: [
      { valor: 0, descripcion: "No he experimentado ningún cambio en mis hábitos de sueño" },
      { valor: 1, descripcion: "Duermo un poco más que lo habitual" },
      { valor: 1, descripcion: "Duermo un poco menos que lo habitual" },
      { valor: 2, descripcion: "Duermo mucho más que lo habitual" },
      { valor: 2, descripcion: "Duermo mucho menos que lo habitual" },
      { valor: 3, descripcion: "Duermo la mayor parte del día" },
      { valor: 3, descripcion: "Me despierto 1-2 horas más temprano y no puedo volver a dormirme" }
    ]
  },
  {
    pregunta: "17. Irritabilidad",
    respuestas: [
      { valor: 0, descripcion: "No estoy tan irritable que lo habitual" },
      { valor: 1, descripcion: "Estoy más irritable que lo habitual." },
      { valor: 2, descripcion: "Estoy mucho más irritable que lo habitua" },
      { valor: 3, descripcion: "Estoy irritable todo el tiempo" }
    ]
  },
  {
    pregunta: "18. Cambios en el apetito",
    respuestas: [
      { valor: 0, descripcion: "No he experimentado ningún cambio en mi apetito" },
      { valor: 1, descripcion: "Mi apetito es un poco menor que lo habitual" },
      { valor: 1, descripcion: "Mi apetito es un poco mayor que lo habitual" },
      { valor: 2, descripcion: "Mi apetito es mucho menor que antes" },
      { valor: 2, descripcion: "Mi apetito es mucho mayor que lo habitual" },
      { valor: 3, descripcion: "No tengo apetito en absoluto" },
      { valor: 3, descripcion: "Quiero comer todo el día" }
    ]
  },
  {
    pregunta: "19. Dificultad de Concentración",
    respuestas: [
      { valor: 0, descripcion: "Puedo concentrarme tan bien como siempre" },
      { valor: 1, descripcion: " No puedo concentrarme tan bien como habitualmente" },
      { valor: 2, descripcion: "Me es difícil mantener la mente en algo por mucho tiempo" },
      { valor: 3, descripcion: "Encuentro que no puedo concentrarme en nada" }
    ]
  },
  {
    pregunta: " 20.Cansancio o Fatiga",
    respuestas: [
      { valor: 0, descripcion: "No estoy más cansado o fatigado que lo habitual" },
      { valor: 1, descripcion: "Me fatigo o me canso más fácilmente que lo habitual" },
      { valor: 2, descripcion: "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer" },
      { valor: 3, descripcion: "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer" }
    ]
  },
  {
    pregunta: " 21.Pérdida de Interés en el Sexo",
    respuestas: [
      { valor: 0, descripcion: "No he notado ningún cambio reciente en mi interés por el sexo" },
      { valor: 1, descripcion: "Estoy menos interesado en el sexo de lo que solía estarlo" },
      { valor: 2, descripcion: "Estoy mucho menos interesado en el sexo" },
      { valor: 3, descripcion: "He perdido completamente el interés en el sexo" }
    ]
  },
 
];

