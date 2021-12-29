import React from "react";
import App from "./App";
import { GlobalStyle } from "./global/styles";
import GithubProvider from "./providers/githubProvider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
