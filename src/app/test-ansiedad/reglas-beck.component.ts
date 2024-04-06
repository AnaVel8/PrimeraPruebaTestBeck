import { RuleProperties } from 'json-rules-engine';

const reglasBeck: RuleProperties[] = [
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 0 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 13 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad aucente o minima' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 14 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 19 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad leve' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 20 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 28 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad moderada' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 29 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 63 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Ansiedad grave' } }
  }
];

export default reglasBeck;