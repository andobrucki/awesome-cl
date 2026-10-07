# Awesome CL - Making a junior developer’s life easier by using a component library! 

## About

Awesome CL is a React library offering reusable front-end components along with a utility library of Express.js middleware and helper functions, aimed at helping junior developers and students build full-stack applications faster while learning how libraries work. The library includes clear documentation and an intuitive, minimalistic interface.

## Purpose
- To create a learning platform specifically for junior developers and students.
- Provide a structured, practical project for users to explore and experiment with coding.

## Mission
- Serve as a platform for learning, not just for users but also for our team.
- Enable hands-on experience in React development, including: Building reusable components, Implementing effective routing, Managing dynamic data fetching, Applying modern styling techniques.

## Why it matters
- Encourages students and junior developers to deepen their understanding of programming.
- Demonstrates the practical value of teamwork and collaborative coding.
- Bridges the gap between theory and practice by showcasing how concepts come together in a real project.

## Installation
Simply choose your favourite package manager and copy the command to your terminal.

- `npm install git+https://github.com/Team-Collaborators/Awesome-CL.git`
- `yarn add git+https://github.com/Team-Collaborators/Awesome-CL.git`
- `pnpm add git+https://github.com/Team-Collaborators/Awesome-CL.git`
- `bun add git+https://github.com/Team-Collaborators/Awesome-CL.git`

## Usage
Now import components wherever you need them with a simple import command.
```javascript
import { Button } from "AwesomeCL";

function App() {
  return (
    <div>
      <Button border="full" color="danger" size="lg">Say hello!</Button>
    </div>
  );
}

export default App;
```

To import the style sheet add it to your main CSS file:
```javascript
@import "/node_modules/AwesomeCL/dist/exports.css";
```
