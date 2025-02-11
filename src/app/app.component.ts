import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimation', [
      transition('*<=>*', [
        style({ opacity: 0 }),
        animate('1.9s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfoliowebsite';
  getRouteAnimation(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
