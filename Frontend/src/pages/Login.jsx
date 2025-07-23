import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email ,setEmail] =useState('')
  const [ password ,setPassword] = useState('')
  const [error, setError] = useState(null)
  const {login}= useAuth()
  const navigate = useNavigate()

//   const handleSubmit= async(e) => {
//     e.preventDefault() 

//    try{
//         const response = await axios.post(
//           "http://localhost:3000/api/auth/login",
//           {email,password}
//         );
//         if(response.data.success){
//           login(response.data.user)
//           if(response.data.user.role === "admin"){
//             navigate("/admin-dashboard")

//         }
//       else{
//         navigate("/employee-dashboard")
//       }}
//      }catch(error){
//       if(error.response && !error.response.data.success) {
//         setError(error.response.data.error)
//       }
//       else {
//         setError("Server Error")
//      }
     
//   }
// }
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    });

    if (response.data.success) {
      // Save token in localStorage
      localStorage.setItem("token", response.data.token);

      // Save user info in context
      login(response.data.user);

      if (response.data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/employee-dashboard");
      }
    }
  } catch (error) {
    if (error.response && !error.response.data.success) {
      setError(error.response.data.error);
    } else {
      setError("Server Error");
    }
  }
};


  return (
 
  
    <div className="relative min-h-screen">
      {/* Top half green */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-teal-600"></div>

      {/* Bottom half gray */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-200"></div>

      {/* Login box */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="*****"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-teal-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md font-semibold hover:bg-teal-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}





export default Login
