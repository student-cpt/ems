import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No token found. Please login again.");
            return;
        }

        const response = await axios.post(
            'http://localhost:3000/api/department/add',
            department,
            {
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            }
        )

        if (response.data.success) {
            navigate('/admin-dashboard/departments');
        }
    } catch (error) {
        console.error("Add Department Error:", error.response?.data || error.message);
        if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
        } else {
            alert("Server error occurred.");
        }
    }
};

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">Add New Department</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Department Name
                        </label>
                        <input
                            type="text"
                            name="dep_name"
                            value={department.dep_name}
                            onChange={handleChange}
                            placeholder="Department Name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            description
                        </label>
                        <textarea
                            name="description"
                            value={department.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Description"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
                    >
                        Add Department
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDepartment;
