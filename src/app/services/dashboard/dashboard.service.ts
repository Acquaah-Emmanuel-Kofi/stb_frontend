import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _http = inject(HttpClient);

  constructor() {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
