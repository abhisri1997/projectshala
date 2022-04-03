import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footeer";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <Outlet />
      {location.pathname === "/" && (
        <>
          <Header />
          <Services />
          <About />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
