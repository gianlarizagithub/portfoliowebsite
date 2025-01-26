import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills = [
    {
      skill: 'Tailwind',
      percentage: '85%',
      imageUrl: 'Tailwind_CSS_LogoPixel.png',
    },
    {
      skill: 'Javascript',
      percentage: '90%',
      imageUrl: 'JavaScript_LogoPixel.png',
    },
    { skill: 'Angular', percentage: '80%', imageUrl: 'angular_logo_pixel.png' },
    { skill: 'React', percentage: '90%', imageUrl: 'React_Logo_Pixel.png' },
    { skill: 'CSS', percentage: '95%', imageUrl: 'CSS_Logo_pixel.png' },
    { skill: 'HTML', percentage: '98%', imageUrl: 'HTML_Logo_pixel.png' },
    { skill: 'NodeJs', percentage: '75%', imageUrl: 'node_js_logo.png' },
  ];

  para1: string =
    'Gian, a self-taught coder from the digital realm, wields the power of popular frontend frameworks to craft seamless, pixel-perfect experiences.';
  para2: string = '';

  constructor() {
    // Start animating para1
    this.animating(
      this.para1,
      (animatedText) => {
        this.para1 = animatedText;
      },
      () => {
        // After para1 animation is done, start animating para2
        this.para2 =
          'With a passion for drawing and design, they balance logic and creativity to deliver extraordinary user experiences.';
        this.animating(this.para2, (animatedText) => {
          this.para2 = animatedText;
        });
      }
    );
  }
  animating(
    original: string,
    onAnimationUpdate: (animatedText: string) => void,
    onAnimationEnd?: () => void
  ) {
    let orig = original;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let currentIndex = -1;

    const animateNextLetter = () => {
      const randomizedText = orig
        .split('')
        .map((char, index) =>
          index < currentIndex ? char : letters[Math.floor(Math.random() * 26)]
        )
        .join('');

      // Update the animated text
      onAnimationUpdate(randomizedText);

      if (currentIndex < orig.length) {
        currentIndex += 1 / 3; // Increment index by 1/3 for smoother animation
        setTimeout(animateNextLetter, 10); // Adjust speed with timeout
      } else {
        // Animation has ended
        if (onAnimationEnd) {
          onAnimationEnd(); // Call the end callback if provided
        }
      }
    };

    animateNextLetter();
  }
}
