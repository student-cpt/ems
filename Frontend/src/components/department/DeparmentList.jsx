import React from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns } from '../../../utils/DepartmentHelper'

const DeparmentList = () => {
  return (
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-2xl font bold'>Manage Department</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input type="text" placeholder='search By Dep Name' className='px-4 py-0.5' />
        <Link to="/admin-dashboard/add-department" 
        className='px-4 py-1 bg-teal-600 rounded text-white'>
          Add New Department</Link>
      </div>
      <div>

      </div>
      <DataTable
       columns={columns}
       />

       </div>
  )
}

export default DeparmentList
