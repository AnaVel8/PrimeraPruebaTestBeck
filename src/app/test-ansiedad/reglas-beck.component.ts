import { RuleProperties } from 'json-rules-engine';

const reglasBeck: RuleProperties[] = [
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 0 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 7 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad ausente o mínima' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 8 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 15 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad leve' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 16 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 25 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad moderada' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 26 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 63 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad grave' } }
  }
];

export default reglasBeck;
