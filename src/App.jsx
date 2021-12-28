import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import { GlobalStyle } from "./global/styles";
import GithubProvider from "./providers/githubProvider";

function App() {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
