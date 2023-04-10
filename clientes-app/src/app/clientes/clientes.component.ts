import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Subscription } from 'rxjs';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit, OnDestroy {

   searchText: any;

  cliente: Cliente = new Cliente()

  suscription: Subscription;

  clientes: Cliente[];

  constructor(private modal: NgbModal, 
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );

    this.suscription = this.clienteService.refresh$.subscribe(() => {
      this.clienteService.getClientes().subscribe(
        clientes => this.clientes = clientes
      );
    })


  };

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
  
}
