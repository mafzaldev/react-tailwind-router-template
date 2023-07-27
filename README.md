# React + TailwindCSS + React Router DOM Starter Template

This template provides a great starting point for building modern web applications using React with TypeScript, TailwindCSS for styling, and React Router DOM for handling client-side routing. Additionally, it leverages Vite, a fast and lightweight development build tool, to optimize the development experience.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Routing](#routing)
- [Linting and Formatting](#linting-and-formatting)

### Features

- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A strict syntactical superset of JavaScript that adds static typing.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **React Router DOM**: Handle client-side routing with ease.
- **Vite**: A fast and efficient development build tool for modern web applications.

### Prerequisites

Before getting started, make sure you have one of the following software installed:

- Node.js: https://nodejs.org/en/
- Yarn: https://yarnpkg.com/

I'll be using npm in this tutorial, but you can use yarn if you prefer.

### Getting Started

The default project name is `react-tailwind-router-template`. To clone the repository with a different project name, run the following command:

```bash
git clone https://github.com/mafzaldev/react-tailwind-router-template "folder name here without quotes"

```

Once the repository has been cloned, navigate to the project directory and change the project name in the `package.json` file (according to the folder name you provided):

```json
{
  "name": "react-tailwind-router-template",
  ...
}
```

Next, install the dependencies:

```bash
cd "folder name here without quotes"
npm install
```

There are some commits in the git history that are not relevant to the template. To remove them, run the following command:

```bash
bash clear_commits.sh
```

Finally, start the development server:

```bash
npm run dev
```

### Routing

This template uses React Router DOM for handling client-side routing. The `src/pages` folder will contain the routes for the pages. For example, the `home` page file is located at `src/pages/home.tsx`. The `App.tsx` file contains the routes for the pages. Create a new route by adding a new file to the `src/pages` folder and adding a new `Route` component to the `App.tsx` file.

```tsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Post from "./pages/post";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}
```

### Linting and Formatting

This project comes pre-configured with ESLint and Prettier to maintain code consistency and adhere to best practices. The linting and formatting rules are defined in the `.eslintrc.js` file.

### Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any questions or suggestions.

### License

MIT © [Muhammad Afzal](https://github.com/mafzaldev)
