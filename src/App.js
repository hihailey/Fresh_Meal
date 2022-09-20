import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventBar from "./components/Navbar/EventBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SubNavbar from "./components/Navbar/SubNavBar";
import { Provider } from "jotai";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="home">
                <EventBar />
                <Navbar />
                <Home />
              </div>
            }
          />

          <Route
            path="/menu"
            element={
              <div className="menu">
                <Provider>
                  <SubNavbar />
                  <Menu />
                </Provider>
              </div>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
