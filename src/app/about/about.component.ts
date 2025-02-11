import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  progress = 10;
  skillSelectedDetail = [
    {
      skill: 'Tailwind',
      percentage: 85,
      imageUrl: 'Tailwind_CSS_LogoPixel.png',
      description:
        'A utility-first framework that grants unparalleled speed and efficiency in crafting sleek, responsive UI layouts. With its modular approach, this skill allows for rapid prototyping and pixel-perfect designs. Equip Tailwind and style your interfaces at lightning speed!',
    },
  ];

  passiveSelectedDetail = [
    {
      skill: 'UI / UX',
      percentage: 85,
      imageUrl: 'Tailwind_CSS_LogoPixel.png',
      description:
        'A utility-first framework that grants unparalleled speed and efficiency in crafting sleek, responsive UI layouts. With its modular approach, this skill allows for rapid prototyping and pixel-perfect designs. Equip Tailwind and style your interfaces at lightning speed!',
    },
  ];

  skills = [
    {
      skill: 'Tailwind',
      type: 'skill',
      active: true,
      percentage: 85,
      imageUrl: 'Tailwind_CSS_LogoPixel.png',
      description:
        'A utility-first framework that grants unparalleled speed and efficiency in crafting sleek, responsive UI layouts. With its modular approach, this skill allows for rapid prototyping and pixel-perfect designs. Equip Tailwind and style your interfaces at lightning speed!',
    },
    {
      skill: 'Javascript',
      percentage: 90,
      active: false,

      type: 'skill',
      imageUrl: 'JavaScript_LogoPixel.png',
      description:
        'The core scripting magic that breathes life into the web! With this skill, you can manipulate the DOM, summon dynamic content, and forge powerful interactions. A must-have ability for any frontend adventurer ready to level up their coding arsenal!',
    },
    {
      skill: 'Angular',
      percentage: 80,
      active: false,

      type: 'skill',
      imageUrl: 'angular_logo_pixel.png',
      description:
        'A powerful framework forged for building dynamic and scalable web applications! With its component-based structure, two-way data binding, and reactive capabilities, this skill lets you craft seamless, high-performance user experiences. Perfect for those who seek structured and efficient frontend mastery!',
    },
    {
      skill: 'React',
      percentage: 90,
      active: false,

      type: 'skill',
      imageUrl: 'React_Logo_Pixel.png',
      description:
        'A high-speed, component-driven library built for crafting interactive and efficient user interfaces! With its virtual DOM, state management, and reusable components, this skill allows you to build seamless, dynamic experiences with ease. Perfect for developers who thrive on flexibility and performance!',
    },
    {
      skill: 'CSS',
      percentage: 95,
      active: false,

      type: 'skill',
      imageUrl: 'CSS_Logo_pixel.png',
      description:
        'The stylistic spellbook that transforms raw structure into stunning visuals! With mastery over layouts, animations, and responsive design, this skill allows you to shape pixel-perfect experiences and bring interfaces to life.',
    },
    {
      skill: 'HTML',
      percentage: 98,
      active: false,

      type: 'skill',
      imageUrl: 'HTML_Logo_pixel.png',
      description:
        'The backbone of the web, providing structure and meaning to every element on screen! Mastering this skill lets you build solid foundations, ensuring content is accessible, semantic, and ready for the digital realm',
    },
    {
      skill: 'NodeJs',
      type: 'skill',
      percentage: 75,
      active: false,

      imageUrl: 'node_js_logo.png',
      description:
        'A high-performance, server-side runtime that fuels real-time applications and backend logic! With this skill, you command asynchronous operations, APIs, and scalable solutions to power the digital world.',
    },
  ];

  passives = [
    {
      skill: 'UI/UX',
      percentage: 30,
      type: 'passive',
      active: false,
      description:
        'UI/UX design is all about creating intuitive, engaging experiences that users can navigate with ease. By focusing on usability, aesthetics, and functionality, I design interfaces that feel natural and delightful. From wireframes to final designs, my approach ensures that every interaction is smooth, efficient, and visually engaging—just like the perfect flow of a well-crafted game level. ',
      imageUrl: 'uiux_logo.png',
    },
    {
      skill: 'Wireframing',
      percentage: 30,
      active: false,

      type: 'passive',
      description:
        'Laying the foundation for intuitive design, wireframing ensures a seamless flow before visuals take shape. By mapping out interactions and layouts, this skill streamlines development, optimizing usability from the start. Whether low-fidelity sketches or interactive prototypes, wireframing is the blueprint behind every well-designed digital experience—just like planning a game level before the adventure begins.🎮✨',
      imageUrl: 'wireframe_logo_pixel.png',
    },
    {
      skill: 'Digital Illustration',
      percentage: 30,
      type: 'passive',
      active: false,

      description:
        'Bringing visuals to life with color, composition, and precision, digital illustration enhances user experiences with engaging artwork. Whether designing UI elements, character assets, or immersive backgrounds, this skill bridges creativity and functionality. With a focus on detail and aesthetics, digital illustration adds depth, personality, and storytelling to any design—just like the art that makes a game world unforgettable. 🎨✨',
      imageUrl: 'digi_illustration_pixel.png',
    },
    {
      skill: 'Hand-Drawn Art',
      percentage: 30,
      active: false,

      type: 'passive',
      description:
        'Before pixels and polished visuals, there’s the raw creativity of hand-drawn art. From initial sketches to refined concepts, this skill captures ideas in their purest form. Whether crafting characters, environments, or UI elements, hand-drawn art brings an organic, human touch to design—just like the concept sketches behind every legendary game.🖋️✨',
      imageUrl: 'hand_drawn_pixel.png',
    },
    {
      skill: 'Logo Design',
      percentage: 50,
      type: 'passive',
      active: false,

      description:
        'A logo is more than just a symbol—it’s the heart of a brand. Through thoughtful design, I create logos that capture the essence of a company’s identity. By combining creativity, simplicity, and visual impact, I ensure each logo communicates the right message while standing the test of time. Whether sleek and modern or playful and nostalgic, logo design is about creating an icon that resonates—just like the memorable logos of your favorite game franchises.',
      imageUrl: 'star_logo_pixel.png',
    },
  ];

  // wireframe_logo_pixel
  para1: string =
    'Gian, a self-taught coder from the digital realm, wields the power of popular frontend frameworks to craft seamless, pixel-perfect experiences.';
  para2: string = '';

  constructor() {
    // this.updateProgressBar(50);
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
        setTimeout(animateNextLetter, 1); // Adjust speed with timeout
      } else {
        // Animation has ended
        if (onAnimationEnd) {
          onAnimationEnd(); // Call the end callback if provided
        }
      }
    };

    animateNextLetter();
  }

  updatingPassive() {}

  updateProgressBar(value: any) {
    this.skills.forEach((s) => (s.active = false));
    this.passives.forEach((s) => (s.active = false));

    value.active = true;

    const newDescription =
      value.description || this.skillSelectedDetail[0].description;

    const fill = document.querySelector(
      '.bar .progress-fill'
    ) as HTMLElement | null;

    if (fill) {
      fill.style.width = `${value.percentage}%`;
    } else {
      console.log();
    }

    this.skillSelectedDetail = [
      {
        skill: value.skill || this.skillSelectedDetail[0].skill, // Keep existing skill if not provided
        percentage: value.percentage || this.skillSelectedDetail[0].percentage, // Keep existing percentage if not provided
        imageUrl: value.imageUrl || this.skillSelectedDetail[0].imageUrl, // Keep existing image if not provided
        description: '',
      },
    ];

    this.animating(
      newDescription,
      (animatedText: string) => {
        this.skillSelectedDetail[0].description = animatedText; // Update description dynamically
      },
      () => {
        this.skillSelectedDetail[0].description = newDescription; // Ensure final text is correct
      }
    );
  }

  filtering(value: any) {
    console.log(value);
    // const skillFiltered = value.filter((skill: { type: string }) => {
    //   skill.type === 'skill';
    // });

    // console.log(skillFiltered);
    return value;
    // console.log(value);
    // return value.filter((skill: { type: string }) => skill.type === 'skill')
    //   ? value.filter((skill: { type: string }) => skill.type === 'skill')
    //   : value.filter((skill: { type: string }) => skill.type === 'passive');
  }
}
