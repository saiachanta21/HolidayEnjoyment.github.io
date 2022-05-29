import { Container} from "@material-ui/core";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import SimpleBottomNavigation from "./components/MainNav";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Movies from "./Pages/Movies/Movies";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path='/Movies' component={Movies}/>
            <Route path='/Series' component={Series}/>
            <Route path='/Search' component={Search}/>           
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;