import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<div> 404: Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
