import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/edit-data/:id" element={<EditData />} />
      </Routes>
    </Router>
  );
}

export default App;
