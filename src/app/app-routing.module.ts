import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'ProjectPage' },
  },
  {
    path: 'project-details',
    component: ProjectDetailsComponent,
    data: { animation: 'ProjectDetailsPage' },
  },
  {
    path: 'contact-form',
    component: ContactFormComponent,
    data: { animation: 'ContactPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
