import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import { GlobalStyle } from "./global/styles";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
