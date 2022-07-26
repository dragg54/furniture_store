import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import useFetchAPI, { BASE_URL } from "./API/fetchAPI";
import Loading from "./loading/Loading";

function App() {

  const [data] = useFetchAPI(BASE_URL);
  if(data.lenght !== 0){
    return (
      <Router>
          <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":id" element={<Item />} />
          </Routes>
      </Layout>
        </Router>
    );
  }

  else{
    return(
      <Loading />
    )
  }


}

export default App;
