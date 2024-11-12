//   >   <
interface ProgramadorInterface{
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let dev: ProgramadorInterface = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true
}

let dev2 = {
    name: 'Federico',
    tech: ['HTML', 'Cobol'],
    lastName: 'Gomez',
}

function enviarCurriculum(programadorInterface: ProgramadorInterface){
    console.log(`Este curriculum es de ${programadorInterface.nombre}`)
    //console.log(`Este curriculum es de ${programadorInterface.apellido}`) NO SE PUEDE pq no existe en la interface
}

enviarCurriculum(dev);