import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Loader from "./components/otherComp/Loader/Loader";
import { initializationTC } from './redux/authReducer'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const isInit = useSelector(state => state.auth.isInit)
  const isAuth = useSelector(state => state.auth.isAuth)
  useEffect(() => {
    dispatch(initializationTC())
  }, [])
  if (!isInit) {
    return (
      <div>
        <Loader />
      </div>

    )
  }
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        {!isAuth 
        ?<Switch>
          <Route path="/login" exact render={() => (<Login />)} />
          <Route path="/registration" exact render={() => (<Registration />)} />
          <Redirect to="/login" />
        </Switch>
        :<Switch>
          <Route path="/" exact render={()=>(<Tabs />)} />
          <Redirect to="/" />
        </Switch>
        }

      </BrowserRouter>
    </div>
  );
}

export default App;
