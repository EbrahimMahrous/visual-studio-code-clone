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
        },
        {
          id: uuid(),
          name: "favicon.svg",
          isFolder: false,
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
            { id: uuid(), name: "Button.tsx", isFolder: false },
            { id: uuid(), name: "Alert.jsx", isFolder: false },
          ],
        },
        {
          id: uuid(),
          name: "pages",
          isFolder: true,
          children: [
            { id: uuid(), name: "Home.tsx", isFolder: false },
            { id: uuid(), name: "About.tsx", isFolder: false },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "vite.config.ts",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content:
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
  ],
};
