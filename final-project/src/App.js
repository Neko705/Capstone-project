import './App.css';
import NavBar from "./NavBar";
import About from "./components/about";
import Home from "./home";
import Menu from "./components/menu";
import Booktable from "./book";
import Login from "./login";

function App(){
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/menu":
      component=  <Menu />
      break
    case "/book":
      component = <Booktable />
      break
    case "/login":
      component = <Login />
      break

  }
  return (
  <>
    <NavBar />
    {component}
  </>
  );
}

export default App;
