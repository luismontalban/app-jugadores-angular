import { Component } from '@angular/core';
import { Jugador } from './models/jugador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Jugadores';
  jugadores: Jugador[] = [new Jugador('Cristiano Ronaldo', 'Manchester United', 'Portugal', 7), new Jugador('Lionel Messi', 'PSG', 'Argentina', 10)];

  nombreInput: string = '';
  equipoInput: string = '';
  paisInput: string = '';
  dorsalInput: number = 0;

 agregarJugador(){
    let jugador1 = new Jugador(this.nombreInput, this.equipoInput, this.paisInput, this.dorsalInput);
    this.jugadores.push(jugador1);
  }




}
