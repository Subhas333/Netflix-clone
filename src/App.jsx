import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Homepage from "./pages/Homepage";
import SignIn from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App