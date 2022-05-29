import Layaout from "./components/layaout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layaout>
          <Profile />
          <Repositories />
        </Layaout>
      </GithubProvider>
    </main>
  );
}

export default App;
