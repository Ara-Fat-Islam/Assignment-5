# Dev Stack

Dev Stack is a React and TypeScript based website for exploring different web development technologies and building a personal development stack.

Users can view technology details, add technologies to their stack, remove individual technologies, and clear the complete stack. The technology information is loaded from a JSON file.

## Live Website

Add your live website link here.

## GitHub Repository

Add your GitHub repository link here.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- React Icons
- Vite
- JSON

## Features

### Technology Explorer

Users can explore different technologies and see their name, category, description, difficulty level, rating, and badge.

### Build Your Stack

Users can add technologies to the "Your Stack" section. The same technology cannot be added twice. Selected technologies can also be removed from the stack.

### Responsive Design

The website is responsive and works on desktop, tablet, and mobile devices. The navigation menu also has a mobile version.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to create and read.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store data inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and update state in a React component.

In this project, I used it to store the technology list, selected stack, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. I used it to fetch the technology data from the `data.json` file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content based on a condition.

I used it in the "Your Stack" section. If no technology is selected, an empty message is shown. If technologies are selected, the selected items are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

A child can send information back to the parent by calling a function that the parent passes through props.

## How to Run

First, install the project dependencies:

```bash
npm install