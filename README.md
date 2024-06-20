# Ravenbase Template

Welcome to RavenBase, building blocks for your Next project! This project is set up with a variety of tools and libraries to help you quickly build and deploy your applications. Below you'll find instructions on how to get started, a brief overview of the included features, and how to make the most out of this template.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Available Components](#available-components)
- [Hooks and Utilities](#hooks-and-utilities)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this template, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/raythurman2386/ravenbase.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

This template includes the following features:

- **Next.js**: The React Framework for Production.
- **Tailwind CSS**: A utility-first CSS framework packed with classes.
- **Shadecn/UI**: Primitive components for building UIs.
- **Lucide Icons**: Beautifully consistent open-source icons.
- **Framer Motion**: A library for animations in React.
- **Useful Hooks and Utilities**: A collection of custom hooks and utilities to enhance your development workflow.

## Hooks and Utilities

This template includes a variety of custom hooks and utility functions:

- **useIntersectionObserver**: Hook to observe intersections.
- **useLocalStorage**: Hook to manage localStorage.
- **useScroll**: Hook to track scroll position.
- **nFormatter**: Utility to format numbers.
- **capitalize**: Utility to capitalize strings.
- **truncate**: Utility to truncate strings.

Example usage of a custom hook:

```jsx
import { useLocalStorage } from "@/hooks/useLocalStorage";

const [value, setValue] = useLocalStorage("key", "default value");
```

## Deployment

Deploy your application with one click using Vercel. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fraythurman2386%2Fravenbase)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
