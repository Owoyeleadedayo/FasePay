import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import ContactUsPage from "./pages/ContactUsPage"
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
