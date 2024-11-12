"use strict";
//   >   <
// <T> --> generico
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //encapsulamiento
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Sergie Code');
sorteo.setTicket(7);
console.log(sorteo.sortear());
let sorteo2 = new Sorteo('Sergie Code');
sorteo2.setTicket('S7');
console.log(sorteo2.sortear());
