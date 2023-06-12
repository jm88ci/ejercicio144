import { Component } from '@angular/core';

@Component({
  selector: 'app-jabonera',
  templateUrl: './jabonera.component.html',
  styleUrls: ['./jabonera.component.css']
})
export class JaboneraComponent {
  public nombre: string;
  public nivelMaximo: number;
  public nivelActual: number;
  public cantidadDispensada: number;
  public bateria: number;
  public encendido: boolean;
  public imagenOn: string;
  public imagenOff: string;

  constructor() {
    this.nombre = "Deliplus";
    this.nivelMaximo = 500;
    this.nivelActual = 0;
    this.cantidadDispensada = 10;
    this.bateria = 100;
    this.encendido = false;
    this.imagenOn = "assets/img/jabonera-on.png";
    this.imagenOff = "assets/img/jabonera-off.png";
  }

  comprobarAjustes(): void {
    if (this.nivelActual < 0) {
      this.nivelActual = 0;
    }
  
    if (this.bateria < 0) {
      this.bateria = 0;
    }
  
    if (this.bateria === 0) {
      this.encendido = false;
    }
  }
  dispensar(): void {
    if (this.encendido) {
      this.nivelActual -= this.cantidadDispensada;
      this.bateria -= 3;
      this.comprobarAjustes();
    }
  }
  rellenarJabon(): void {
    this.nivelActual = this.nivelMaximo;
  }
  cargarBateria(): void {
    this.bateria = 100;
  }
  power(): void {
    this.bateria -= 0.1;
    this.encendido = !this.encendido;
    this.comprobarAjustes();
  }
  
  
}
