import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import Items from "./pages/Items";

function App() {
    return (
      <Router>
          <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route exact path="/:id" element={<Item />} />
            <Route exact path='/allitems' element={<Items/>} />
          </Routes>
      </Layout>
        </Router>
    );
  }

export default App;
