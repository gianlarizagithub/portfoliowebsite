import { Inject, Injectable } from '@angular/core';
import {
  PROJECT_REPOSITORY,
  ProjectRepository,
} from '../ports/project.repository';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(
    @Inject(PROJECT_REPOSITORY) private projectRepo: ProjectRepository
  ) {}

  getAllProjects(): Observable<Project[]> {
    return this.projectRepo.getProjects();
  }
}
