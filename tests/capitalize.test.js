import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('¡La función no funciona correctamente!');
// }

assert.equal(capitalize('hello'), 'Hello');

// if (capitalize('') !== '') {
//   throw new Error('¡La función no funciona correctamente!');
// }

assert.equal(capitalize(''), '');

console.log('¡Todas las pruebas han pasado!');
