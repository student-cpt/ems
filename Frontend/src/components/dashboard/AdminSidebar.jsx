import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendar,  FaCog, FaMoneyBill, FaTachometerAlt,FaUsers} from 'react-icons/fa'



const AdminSidebar = () => {
  const navItems = [
    { to: "/admin-dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    { to: "/admin-dashboard/employees", icon: <FaUsers />, label: "Employee" },
    { to: "/admin-dashboard/departments", icon: <FaBuilding />, label: "Department" },
    { to: "/admin-dashboard/leaves", icon: <FaCalendar />, label: "Leave" },
    { to: "/admin-dashboard/salaries", icon: <FaMoneyBill />, label: "Salary" },
    { to: "/admin-dashboard/settings", icon: <FaCog />, label: "Setting" },
  ];

  return (
    <div className="w-60 min-h-screen bg-[#1e293b] text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-2xl font-bold text-teal-400">Employee MS</h3>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {navItems.map(({ to, icon, label }) => (
          <NavLink key={to} to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? 'bg-teal-500' : 'hover:bg-gray-700'}`
            }>
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;