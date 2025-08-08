import React from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";//, Outlet 
import Login from "./components/ui_components/Login/Login";
import Dashboard from "./components/ui_components/Dashboard/index";
import Registration from "./components/ui_components/Registration/Registration";

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} /> */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
//{isAuthenticated ? <Dashboard /> : <Login />} />
export default App;
