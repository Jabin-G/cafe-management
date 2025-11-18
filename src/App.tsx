import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Dashboard/Sidebar';
import Header from './Dashboard/Header';
import Home from './Dashboard/Home';
import Login from "./login/login";
import Billing from "./billing";
import EmployeeTable from "./Employees/EmployeeTable";
import OtpPage from "./login/Otppage";
import ForgotPassword from "./login/ForgotPassword";
import Register from "./login/Register";
import GmailMenu from "./login/GmailMenu";
import ResetPassword from "./login/reset_password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/gmailmenu" element={<GmailMenu />} />
        <Route path="/reset-password" element={<ResetPassword />} />
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
                    <Route path="/Billing" element={<Billing />} />
                    <Route path="/employees" element={<EmployeeTable />} />
                    {/* <Route path="/meun" element={<MenuItemCarēd />} /> */}
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
