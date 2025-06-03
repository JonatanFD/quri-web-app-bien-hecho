import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project.entity';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}


    getAllBlueprints(): Observable<Project[]> {
        return this.http.get<Project[]>('http://localhost:3000/projects/blueprints');
    }
}
