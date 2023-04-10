import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ClienteService } from '../clientes/cliente.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Cliente } from '../clientes/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit{

  private cliente: Cliente = new Cliente()

  constructor(private modal: NgbModal, private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  open(content) {
    this.modal.open(content);
  }

  create(form_reset): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
    }
    );
    form_reset.reset()
  }
}
