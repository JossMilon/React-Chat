import "normalize.css";
import Layout from "./components/layout";
import Navbar from "./components/navbar";

import { ContextProvider } from "./context";

//OTHER IMPROVEMENTS TO BE ADDED
// - Add react context hook instead of props drilling on 3 levels

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Layout />
    </ContextProvider>
  );
}

export default App;
