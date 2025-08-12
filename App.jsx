import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { styled } from "@acab/ecsstatic";

const Global = styled.global`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue";
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    overflow: hidden;
    background-color: #000;
  }
  @keyframes glitch {
    0%,
    100% {
      text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
    }
    25% {
      text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
    }
    50% {
      text-shadow: -1.5px 1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
    }
    75% {
      text-shadow: 1.5px -1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
    }
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 8vw;
  animation: glitch 0.5s linear infinite;
`;

function App() {
  return (
    <>
      <Global />
      <Title>SINGLETON</Title>
    </>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
