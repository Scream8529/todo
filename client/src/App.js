import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";
import Login from "./components/Login/Login";
import { BrowserRouter, Route } from 'react-router-dom'
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />

        
        <Route path="/" exact render={()=>(<Tabs />)}/>
        <Route path="/login" exact render={()=>(<Login />)}/>
        <Route path="/registration" exact render={()=>(<Registration />)}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
