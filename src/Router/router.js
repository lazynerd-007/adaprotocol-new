import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error/error";
import Home from "../pages/Home/home";



function Router() {
    return (
      <div className="Router">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connected" element={<Error />} />
         
      </Routes>
      </div>
    );
  }
  
  export default Router;