import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './registro-usuarios/registro-usuarios.component';
import { AdminsComponent } from './admins/admins.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private myAppUrl: string;
 private myApiUrl: string;

  constructor( private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/usuarios/'
  }

  getListUser(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteUser(id: number): Observable<void>{
   return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveUser(user: Usuarios): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, user)
   }

   getUser(id: number): Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.myAppUrl}${this.myApiUrl}${id}`)
   }


   updateUsuario(id: number, usuario: Usuarios): Observable<void>{
return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, usuario)
   }
}

