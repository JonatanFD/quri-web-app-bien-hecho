import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from '../../user-management/services/user.service';
import { ProjectAssembler } from './project.assembler';
import { ProjectResponse } from './project.response';
import { BaseService } from '../../shared/services/base.service';

// this must be removed when the backend is ready
const GET_ALL_USER_BLUEPRINTS = (id: string) =>
    `http://localhost:3000/projects?status=blueprint&user_id=${id}`;

@Injectable({
    providedIn: 'root',
})
export class ProjectService extends BaseService<ProjectResponse> {
    protected userService = inject(UserService);

    constructor() {
        super('projects');
    }

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
