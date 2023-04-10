import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../clientes/cliente'; 

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: Cliente[], texto: string): Cliente[] {
    if(!texto) return lista
    return lista.filter(cliente => cliente.id.toLowerCase().indexOf(texto.toLowerCase()) > -1)
  }

}
