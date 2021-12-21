import Layout from "./components/Layout";
import Profile from "./components/Profile";
import { GlobalStyle } from "./global/styles";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
