import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Dashboard/Sidebar';
import Header from './Dashboard/Header';
import Home from './Dashboard/Home';
import Cart from './Order/Cart';
import Login from "./login/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route - Login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected route - Dashboard layout with Sidebar and Header */}
        <Route
          path="/*"
          element={
            <div className="flex bg-gray-50 min-h-screen">
              {/* Sidebar */}
              <div className="w-64 bg-white shadow-md fixed h-full">
                <Sidebar />
              </div>

              {/* Main content */}
              <div className="flex-1 ml-64">
                <Header />
                <div className="p-6 space-y-6">
                  <Routes>
                    {/* Dashboard routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
