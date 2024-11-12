"use strict";
let dev = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true
};
let dev2 = {
    name: 'Federico',
    tech: ['HTML', 'Cobol'],
    lastName: 'Gomez',
};
function enviarCurriculum(programadorInterface) {
    console.log(`Este curriculum es de ${programadorInterface.nombre}`);
    //console.log(`Este curriculum es de ${programadorInterface.apellido}`) NO SE PUEDE pq no existe en la interface
}
enviarCurriculum(dev);
