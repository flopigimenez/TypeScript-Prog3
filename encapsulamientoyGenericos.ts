//   >   <
// <T> --> generico
class Sorteo <T> {
    private ticket?: T;

    constructor(
        private nombre: string
    ){}

    //encapsulamiento
    setTicket(ticket:T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<number>('Sergie Code');
sorteo.setTicket(7);
console.log(sorteo.sortear());

let sorteo2 = new Sorteo<string>('Sergie Code');
sorteo2.setTicket('S7');
console.log(sorteo2.sortear());