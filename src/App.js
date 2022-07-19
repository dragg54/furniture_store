import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./pages/Home/Item";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
