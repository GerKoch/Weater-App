import { Navbar } from "./components/navbar/Navbar";
import { PageContent } from "./pages/pageContent/PageContent";
import { IconsProvider } from "./components/contexts/IconsContext";
import "./App.css";

function App() {
  return (
    <IconsProvider>
      <>
        <Navbar />
        <PageContent />
      </>
    </IconsProvider>
  )
}

export default App;