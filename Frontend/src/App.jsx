


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoutes from "../utils/PrivateRoutes";
import RoleBaseRoutes from "../utils/RoleBaseRoutes";
import AuthProvider from "./context/authContext";
import AdminSummary from "./components/dashboard/AdminSummary";
import DeparmentList from "./components/department/DeparmentList";
import AddDepartment from "./components/department/AddDepartment";


// Placeholder Components
const Employees = () => <div>Sandeep Sharma</div>;
//const Departments = () => <div>Departments</div>;
const Leaves = () => <div>Sandeep Sharma</div>;
const Salaries = () => <div>Sandeep Sharma</div>;
const Settings = () => <div>Sandeep Sharma</div>;



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<RoleBaseRoutes requiredRole={["admin"]} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />}>
                <Route index element={<AdminSummary />} />
                <Route path="employees" element={<Employees />} />
                <Route path="departments" element={<DeparmentList />} />
                <Route path="add-department" element={<AddDepartment />} />

                <Route path="leaves" element={<Leaves />} />
                <Route path="salaries" element={<Salaries />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>

            <Route element={<RoleBaseRoutes requiredRole={["employee"]} />}>
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            </Route>
          </Route>

          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;