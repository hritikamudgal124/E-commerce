import Header from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { headerTabs } from "./config/routingConfig";

function App() {
  return (
    <>
      <Header brandName={"E-commerce"} tabData={headerTabs} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
