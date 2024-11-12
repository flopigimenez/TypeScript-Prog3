"use strict";
//   >   <
// let interMiami: number | null | undefined = null
let interMiami = 11;
let fcDalas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocioné al verlo a Messi';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    // if (juegaMessi) equipo1 += messi
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' por que juega Messi';
    }
    ;
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDalas, juegaMessi);
