import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;