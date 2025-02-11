import { Component } from '@angular/core';
import { ProjectserviceService } from '../services/projectservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    // Easy Projects
    {
      imgUrl: '',
      title: 'Weather Forecasting System',
      difficulty: 'easy',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'A simple app that provides weather updates based on user location.',
      detailedInformation:
        'The Weather Forecasting System is a simple mobile or web application that provides accurate and up-to-date weather information based on the user’s current location. This app uses APIs like OpenWeather or WeatherStack to fetch real-time data such as temperature, humidity, wind speed, and weather conditions. Users can also view detailed forecasts for the next 7 days, including possible rainfall or extreme weather events. The app aims to make it easy for people to plan their day with reliable weather data at their fingertips.',
    },
    {
      imgUrl: '',
      title: 'Personal Movie Watchlist',
      difficulty: 'easy',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'An app designed to track and organize movies you want to watch.',
      detailedInformation:
        'The Personal Movie Watchlist app is designed for movie enthusiasts to organize and track movies they wish to watch. With an easy-to-use interface, users can search for movies, add them to their watchlist, and categorize them based on genres, favorite actors, or directors. The app integrates with external APIs like TMDb or OMDb to provide movie information, ratings, trailers, and release dates. It also offers personalized recommendations and allows users to rate the movies they’ve seen, making it a great tool for movie lovers to discover and organize content.',
    },
    {
      imgUrl: '',
      title: 'Task Management System',
      difficulty: 'easy',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation: 'A basic to-do list app for organizing daily tasks.',
      detailedInformation:
        'The Task Management System is a productivity-focused web or mobile app designed to help users stay organized and manage daily tasks efficiently. The app allows users to create, edit, prioritize, and categorize tasks based on deadlines, importance, or urgency. Features such as task reminders, progress tracking, and the ability to mark tasks as complete make it easier for individuals and teams to stay on top of their responsibilities.',
    },
    {
      imgUrl: '',
      title: 'Expense Tracker App',
      difficulty: 'easy',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation: 'An application to log and categorize daily expenses.',
      detailedInformation:
        'The Expense Tracker App is a financial management tool designed to help users log, categorize, and track their spending habits. The app allows users to set a monthly budget, enter their expenses, and view detailed reports and graphs showing their spending patterns.',
    },

    // Medium Projects
    {
      imgUrl: '',
      title: 'E-commerce Product Page',
      difficulty: 'medium',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'A front-end product page with dynamic filtering and sorting options.',
      detailedInformation:
        'The E-commerce Product Page is a front-end development project designed to showcase a product page on an e-commerce website. The page features dynamic filtering and sorting options, allowing users to easily browse products by categories such as price range, size, color, and user ratings.',
    },
    {
      imgUrl: '',
      title: 'Chat Application',
      difficulty: 'medium',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation: 'A real-time chat app with WebSocket integration.',
      detailedInformation:
        'The Chat Application is a real-time messaging platform where users can send and receive messages instantly. Built with WebSockets, this app supports one-on-one and group chats, and includes features such as message notifications, real-time typing indicators, and message read receipts.',
    },
    {
      imgUrl: '',
      title: 'Portfolio Website with CMS',
      difficulty: 'medium',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'A personal portfolio website with a content management system.',
      detailedInformation:
        'The Portfolio Website with CMS is a personal website designed to showcase a user’s work, skills, and experience. The app allows users to create, edit, and publish their portfolio projects through an easy-to-use content management system.',
    },

    // Hard Projects
    {
      imgUrl: '',
      title: 'AI-Powered Chatbot',
      difficulty: 'hard',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'A chatbot that uses AI models to answer user queries intelligently.',
      detailedInformation:
        'The AI-Powered Chatbot is an advanced conversational agent that leverages machine learning models to understand and respond to user queries intelligently. Built using natural language processing (NLP) techniques, the chatbot can handle a wide range of topics, answer frequently asked questions, and even integrate with external services like weather APIs or customer service platforms.',
    },
    {
      imgUrl: '',
      title: 'Full-Stack Social Media App',
      difficulty: 'hard',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'A social media platform with user authentication and real-time features.',
      detailedInformation:
        'The Full-Stack Social Media App is a fully-fledged social platform that includes features such as user authentication, profile creation, real-time messaging, and content sharing. Built using a modern tech stack, this app allows users to post status updates, like and comment on posts, follow other users, and receive notifications.',
    },
    {
      imgUrl: '',
      title: 'Blockchain-Based Voting System',
      difficulty: 'hard',
      techStack: [
        {
          skill: 'HTML',
          imageUrl: 'HTML_Logo_pixel',
        },
        {
          skill: 'JS',
          imageUrl: 'JavaScript_LogoPixel',
        },
        {
          skill: 'CSS',
          imageUrl: 'CSS_Logo_pixel',
        },
      ],
      shortInformation:
        'A secure and decentralized voting platform using blockchain technology.',
      detailedInformation:
        'The Blockchain-Based Voting System is an innovative project aimed at improving the security, transparency, and efficiency of elections. By leveraging blockchain technology, the system ensures that votes are securely recorded and can’t be altered, providing tamper-proof records of election results.',
    },
  ];

  constructor(private projService: ProjectserviceService) {}

  sendingProj(data: any) {
    this.projService.changeProject(data);
    console.log(data);
  }
}
