//   >   <
// let interMiami: number | null | undefined = null
let interMiami: number = 11;
let fcDalas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

let palabras: string = 'Me emocioné al verlo a Messi';

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    let motivo: string = '';
    // if (juegaMessi) equipo1 += messi
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' por que juega Messi';
    };
    if (equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2) console.log('Empatan');
    if (equipo1 < equipo2) console.log('Gana FC Dallas');
}

jugar(interMiami, fcDalas, juegaMessi);

