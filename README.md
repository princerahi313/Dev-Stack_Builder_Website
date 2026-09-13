# Dev Stack Builder

A modern web app for exploring, comparing, and choosing the best development stack for your next project.

## Overview

Dev Stack Builder helps developers discover popular frontend, backend, database, and tooling combinations in one clean interface. It is designed to simplify stack selection and make project planning faster and more informed.

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3

## Key Features

1. Smart stack comparison
   - Explore different technology combinations and understand how they fit together.

2. Developer-focused UI
   - Clean, modern interface designed for quick browsing and easier decision-making.

3. Project-ready inspiration
   - Discover practical tech stacks for frontend, backend, and database choices based on common project needs.

## Getting Started

```bash
npm install
npm run dev
```

## Project Status

This project is currently under active development and is being built as a frontend landing page and stack showcase experience.

---

## React Questions (Short Answers)

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and helps us build UI in a more natural way. Instead of writing lots of complex `createElement()` calls, we can write elements like `<div>Welcome</div>` directly in our component.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data that belongs to the component itself and can change over time. Props are read-only from the child side, while state is used when the component needs to update its own data.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a functional component store and update data. It is used when the component needs to react to changes, such as updating selected filters, user input, or a list of stack items. In this project, it can be used to store the current stack data or selected category so the UI updates when a user interacts with it.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs after the component is rendered, which is useful for loading data or running side effects. In this project, we use it to fetch or load the JSON data after the page mounts, so the data is available before the UI displays it. This makes sure the app does not try to render empty data too early.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to track which list item is which. Without a unique key, React may render the list incorrectly or update the wrong item when the list changes. It helps keep the UI stable and efficient.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different content depending on a condition. For example, if the stack list is empty, we can show a message like “No stacks available yet.” This is useful when we want to display a fallback message instead of an empty section.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props, like `<Child name={"Alice"} />`. The child can then read that value. To send data back, the parent passes a function as a prop, and the child calls that function when something happens, such as clicking a button or selecting an item. That function updates the parent’s state.

---
