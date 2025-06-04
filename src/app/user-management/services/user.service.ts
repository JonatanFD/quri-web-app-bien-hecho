import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private userId: string = environment.devUser

  constructor(private http: HttpClient) {}

    // Define user properties and methods here

    getSessionUserId(): string {
        return this.userId;
    }
}
