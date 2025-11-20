
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from './Dashboard/Sidebar';
import Header from './Dashboard/Header';
import Login from "./login/login";
import Billing from "./billing";
import EmployeeTable from "./Employees/EmployeeTable";
import OtpPage from "./login/Otppage";
import ForgotPassword from "./login/ForgotPassword";
import Register from "./login/Register";
import GmailMenu from "./login/GmailMenu";
import ResetPassword from "./login/reset_password";
import TableList from "./Table";
import VendorTable from "./purchase/VendorTable";
// import { useEffect } from "react";
// import Home from "./Dashboard";

function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="w-64 bg-white shadow-md fixed h-full">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        <Header />

        <div className="p-6 space-y-6">
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/employees" element={<EmployeeTable />} />
            <Route path="/table" element={<TableList />} />
            <Route
              path="/vendor"
              element={<VendorTable vendors={[]} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}


function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const savedUser = localStorage.getItem("user");

  //   if (savedUser) {
  //     navigate("/home");
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <Router>
      <Routes>

        {/* LOGIN / AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/gmailmenu" element={<GmailMenu />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Redirect root → login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
