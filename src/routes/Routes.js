import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";

const RoutesPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesPages;
