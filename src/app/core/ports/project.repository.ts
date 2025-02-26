import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { InjectionToken } from '@angular/core';

export interface ProjectRepository {
  getProjects(): Observable<Project[]>;
}

export const PROJECT_REPOSITORY = new InjectionToken<ProjectRepository>(
  'ProjectRepository'
);
