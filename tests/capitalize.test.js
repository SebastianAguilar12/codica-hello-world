import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('¡La función no funciona correctamente!');
}

if (capitalize('') !== '') {
  throw new Error('¡La función no funciona correctamente!');
}

console.log('¡Todas las pruebas han pasado!');
