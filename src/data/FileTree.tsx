import { v1 as uuid } from "uuid";
import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuid(),
  name: "project-name",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
        },
        {
          id: uuid(),
          name: "favicon.svg",
          isFolder: false,
          content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#646cff" />
</svg>`,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "assets",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "icons",
              isFolder: true,
              children: [
                { id: uuid(), name: "folder.svg", isFolder: false },
                { id: uuid(), name: "react.svg", isFolder: false },
                { id: uuid(), name: "typescript.svg", isFolder: false },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default Button;`,
            },
            {
              id: uuid(),
              name: "Alert.jsx",
              isFolder: false,
              content: `const Alert = ({ message }) => {
  return <div className="alert">{message}</div>;
};

export default Alert;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "pages",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Home.tsx",
              isFolder: false,
              content: `const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;`,
            },
            {
              id: uuid(),
              name: "About.tsx",
              isFolder: false,
              content: `const About = () => {
  return <h1>About Page</h1>;
};

export default About;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;`,
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
          content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
          content: `body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.btn {
  padding: 8px 12px;
  border: none;
  background: #646cff;
  color: white;
  cursor: pointer;
}`,
        },
      ],
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `{
  "name": "project-name",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`,
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
      content: `{
  "compilerOptions": {
    "target": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  }
}`,
    },
    {
      id: uuid(),
      name: "vite.config.ts",
      isFolder: false,
      content: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});`,
    },
    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content: `# Project Name

Simple React + Vite + TypeScript project.

## Scripts
- npm run dev
- npm run build
- npm run preview`,
    },
  ],
};
