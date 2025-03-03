import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTaskInAdminPanel from '../other/AllTaskInAdminPanel'

const AdminDashboard = (props) => {
  return (
    <div className='p-10 h-screen'>
      {/* {added blank object in order to ensures Header gets a valid data object, preventing Cannot read properties of undefined (reading 'firstName').} */}
        <Header changeUser = {props.changeUser}  data={{ firstName: "Admin" }}  />                
        <CreateTask />
        <AllTaskInAdminPanel />
    </div>
  )
}

export default AdminDashboard


