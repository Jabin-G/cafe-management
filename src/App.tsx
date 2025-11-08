import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Dashboard/Sidebar';
import Header from './Dashboard/Header';
import Home from './Dashboard/Home';
import Cart from './Order/Cart';
import Login from "./login/login";
import Billing from "./billing";
import EmployeeTable from "./Employees/EmployeeTable";
import MenuItem from "./Configcation/MenuItem";
import LeaveTable from "./Leave/LeaveTable";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/Billing" element={<Billing />} />
                    <Route path="/Menu" element={<MenuItem item={undefined} />} />
                    <Route path="/employees" element={<EmployeeTable />} />
                    <Route path="/Leave" element={<LeaveTable />} />
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
