import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuarios: Usuario[] = [];
  constructor() {

  }
  ngOnInit() {
    this.usuarios = [
      {
        nome: 'João Silva',
        cpf: '123.456.789-00',
        telefone: '(11) 98765-4321',
        dataNascimemto: new Date('1990-01-01')
      },
      {
        nome: 'Maria Souza',
        cpf: '987.654.321-00',
        telefone: '(21) 98765-4321',
        dataNascimemto: new Date('1992-05-15')
      },
      {
        nome: 'Pedro Oliveira',
        cpf: '111.222.333-44',
        telefone: '(31) 98765-4321',
        dataNascimemto: new Date('1985-12-30')
      }
    ];
  }

}
