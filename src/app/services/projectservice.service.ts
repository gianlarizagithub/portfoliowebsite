import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectserviceService {
  private projectSource = new BehaviorSubject<any>({ techStack: [] });

  currentProject: Observable<any> = this.projectSource.asObservable();

  changeProject(proj: any) {
    this.projectSource.next(proj);
  }
}
