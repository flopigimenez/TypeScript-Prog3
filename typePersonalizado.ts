//   >   <
type Programador = {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null  //? = opcional, | null (para indicar otra posibilidad) 
}

let programador: Programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true
}

let programador2: Programador = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: null
}