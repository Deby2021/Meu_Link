import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Links from "./pages/Links/link";
import Error from "./pages/Error/error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
