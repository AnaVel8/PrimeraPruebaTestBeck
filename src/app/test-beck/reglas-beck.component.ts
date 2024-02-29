import { RuleProperties } from 'json-rules-engine';

const reglasBeck: RuleProperties[] = [
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 0 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 13 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Indicios de Mínima depresión' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 14 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 19 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Depresión leve' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 20 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 28 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Depresión moderada' } }
  },
  {
    conditions: {
      all: [
        { fact: 'puntajeTotal', operator: 'greaterThanInclusive', value: 29 },
        { fact: 'puntajeTotal', operator: 'lessThanInclusive', value: 63 }
      ]
    },
    event: { type: 'resultado', params: { resultado: 'Depresión grave' } }
  }
];

export default reglasBeck;