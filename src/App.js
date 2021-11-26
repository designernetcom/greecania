// import logo from './logo.svg';
import "./App.css";
import HomeScreens from "./screens/HomeScreens";
import AboutScreens from "./screens/AboutScreen"
import ContactScreens from "./screens/ContactScreen"
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import GreekYogurt from "./screens/productscreen/GreekYogurt"
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreens} />
        <Route exact path="/about" component={AboutScreens} />
        <Route exact path="/contact" component={ContactScreens} />
        <Route exact path="/greek-yogurt" component={GreekYogurt} />
      </Switch>
      <Footer />
      </Router>
     
    </div>
  );
}

export default App;
