import React from 'react'
import Header from '../other/Header'
import NumberOfTasks from '../other/NumberOfTasks'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props);
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
        <Header changeUser = {props.changeUser} data = {props.data} />
        <NumberOfTasks data = {props.data} />
        <TaskList data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard