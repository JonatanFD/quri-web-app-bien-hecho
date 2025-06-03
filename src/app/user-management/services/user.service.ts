import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(private http: HttpClient) {}

    // Define user properties and methods here
}
