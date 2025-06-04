import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from '../../user-management/services/user.service';
import { ProjectAssembler } from './project.assembler';
import { ProjectResponse } from './project.response';

// this must be removed when the backend is ready
const GET_ALL_USER_BLUEPRINTS = (id: string) =>
    `http://localhost:3000/projects?status=blueprint&user_id=${id}`;

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    protected userService = inject(UserService);
    constructor(private http: HttpClient) {}

    getUserBlueprints() {
        const userId = this.userService.getSessionUserId();
        return this.http
            .get<ProjectResponse[]>(GET_ALL_USER_BLUEPRINTS(userId))
            .pipe(
                map((projects) =>
                    ProjectAssembler.toEntitiesFromResponse(projects)
                )
            );
    }
}
