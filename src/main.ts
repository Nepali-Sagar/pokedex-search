import "./style.css";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";

const rootElement = document.querySelector<HTMLDivElement>("#root");

if (!rootElement) {
  throw new Error("The root element is missing from the page.");
}

createRoot(rootElement).render(createElement(HomePage));
