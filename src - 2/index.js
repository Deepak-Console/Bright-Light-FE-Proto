import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logs from "./pages/Logs"
import Automations from "./pages/Automations"
import NavbarComp from "./Component/Navbar"


export default function App() {


  return (
    <>
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Logs />} />
            <Route path="logs" element={<Logs />} />
            <Route path="auto" element={<Automations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


