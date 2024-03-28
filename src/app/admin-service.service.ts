import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { AdminsComponent } from './admins/admins.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private myAppUrl: string;
  private myApi: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApi = 'api/admins/';
  }

  signIn(admin: AdminsComponent): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApi}`, admin);
    }

    login(admin: AdminsComponent): Observable<string>{
      return this.http.post<string>(`${this.myAppUrl}${this.myApi}/login`,admin)

    }
}
