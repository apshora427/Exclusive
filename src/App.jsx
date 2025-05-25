import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sign_Up from "./pages/Sign_Up";
import Log_In from "./pages/Log_In";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign_up" element={<Sign_Up/>} />
      <Route path="/login" element={<Log_In/>} />
    </Routes>
  </BrowserRouter>
  )
}
export default App