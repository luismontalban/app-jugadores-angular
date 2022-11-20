import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  @Input() jugador: Jugador;
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
