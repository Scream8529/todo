import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Tabs />
      </BrowserRouter>
    </div>
  );
}

export default App;
