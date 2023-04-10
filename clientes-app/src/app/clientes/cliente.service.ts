import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { Cliente } from "./cliente";
import { tap, catchError, map } from "rxjs/operators";
import Swal from 'sweetalert2';

@Injectable()
export class ClienteService {

    private _refresh$ = new Subject<void>()

    private urlEndPoint: string = 'http://localhost:8080/api/clientes';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    get refresh$() {
        return this._refresh$;
    }
    
    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.urlEndPoint)
    }

    create(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders }).pipe(
            map((response: any)=> response.cliente as Cliente),
            tap(() => {
                this._refresh$.next();
            }),
            catchError(e =>{
                console.log(e.error.mensaje);
                Swal.fire('Error al crear al cliente', e.error.mensaje, 'error')
                return throwError(e);
            })
        )
    }

    

}