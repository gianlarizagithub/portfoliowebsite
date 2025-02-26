import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/project.model';
import {
  PROJECT_REPOSITORY,
  ProjectRepository,
} from '../ports/project.repository';

@Injectable({
  providedIn: 'root',
})
export class ProjectserviceService {
  private projectSource = new BehaviorSubject<any>({ techStack: [] });

  currentProject: Observable<any> = this.projectSource.asObservable();

  constructor(
    @Inject(PROJECT_REPOSITORY) private projectRepo: ProjectRepository
  ) {}

  getAllProjects(): Observable<Project[]> {
    return this.projectRepo.getProjects();
  }
  changeProject(proj: any) {
    this.projectSource.next(proj);
  }
}
