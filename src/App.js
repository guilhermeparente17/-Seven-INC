import React, { useEffect} from 'react';
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import EmployeeShow from "./pages/Employee/EmployeeShow/EmployeeShow";


function App() {

  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return <Home />;
  }

  return (
    <div>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="*" index element={<Redirect to="/employee" />} />
        <Route path="employee/:id/show" element={<EmployeeShow />} />

      </Routes>

    </div>
  );
}

export default App;
