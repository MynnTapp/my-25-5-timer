# My 25+5 Timer

This is a Pomodoro timer application built with React and Vite. The timer allows users to manage their work and break sessions effectively by customizing session and break lengths. It also includes start, stop, and reset functionality.

## Features

- **Customizable Session Length**: Adjust the session length between 1 and 60 minutes.
- **Customizable Break Length**: Adjust the break length between 1 and 60 minutes.
- **Start/Stop Timer**: Start or stop the timer at any point.
- **Reset Timer**: Reset the timer to its default state.
- **Audio Alarm**: Plays a beep sound when a session or break ends.

## Project Structure
my-25+5-timer/ ├── public/ │ └── vite.svg ├── src/ │ ├── assets/ │ │ └── (audio and image assets) │ ├── components/ │ │ ├── timer.jsx │ │ └── timer.css │ ├── App.jsx │ ├── App.css │ ├── index.css │ └── main.jsx ├── .gitignore ├── index.html ├── package.json ├── vite.config.js └── README.md



## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-25+5-timer.git
   cd my-25+5-timer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
## Scripts
- **npm run dev**: Start the development server.
- **npm run build**: Build the app for production.
- **npm run preview**: Preview the production build.
- **npm run lint**: Run ESLint to check for code quality issues.

## Usage
- Adjust the Break Length and Session Length using the increment and decrement buttons.
- Click the Start button to begin the timer.
- The timer will switch between "Session" and "Break" automatically.
- Click the Stop button to pause the timer.
- Click the Reset button to reset the timer to its default state.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the application.
  
## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments
- FreeCodeCamp for the Pomodoro Timer project requirements.
- Vite for the development environment.
- React for the UI framework.
   
