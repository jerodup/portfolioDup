import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ContactForm from "./pages/ContactForm.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
}
export default App;
