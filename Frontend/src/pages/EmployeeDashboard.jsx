// import React from 'react'

// const EmployeeDashboard = () => {
//     const {useAuth} = require('../context/authContext')
//   return (
//     <div>employee dashboard {user.name} </div>
//   )
// }

// export default EmployeeDashboard


import React from 'react';
import { useAuth } from '../context/authContext';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  return (
    <div>Employee Dashboard {user?.name || 'Guest'}</div>
  );
};

export default EmployeeDashboard;
