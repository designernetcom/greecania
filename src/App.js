// import logo from './logo.svg';
import "./App.css";
import HomeScreens from "./screens/HomeScreens";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreens />
      <Footer />
    </div>
  );
}

export default App;
