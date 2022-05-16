import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Add from "./Pages/Add";
import List from "./Pages/List";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        </Route>
        <Route path="*" element={<div> 404: Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
