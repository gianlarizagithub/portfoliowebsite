import {
  PROJECT_REPOSITORY,
  ProjectRepository,
} from './core/ports/project.repository';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BackButtonComponent } from './back-button/back-button.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectService } from './core/services/project.service';
import { ProjectMockAdapter } from './adapters/mock/project-mock.adapter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ContactFormComponent,
    BackButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: PROJECT_REPOSITORY, useClass: ProjectMockAdapter }],
  bootstrap: [AppComponent],
})
export class AppModule {}
