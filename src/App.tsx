import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Dashboard/Sidebar';
import Header from './Dashboard/Header';
import Home from './Dashboard/Home';
import Product from './menu/Product';
import Cart from './Order/Cart';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md fixed h-full">
          <Sidebar />
        </div>
        <div className="flex-1 ml-64">
          <Header />
          <div className="p-6 space-y-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/Cart" element={<Cart />} />
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
