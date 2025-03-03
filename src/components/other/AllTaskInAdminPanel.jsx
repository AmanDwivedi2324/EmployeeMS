import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTaskInAdminPanel = () => {

   const [userData,setUserData] = useContext(AuthContext);
//    const { employees } = authData; // Destructure employees from the context
  //  console.log(authData.employees); 
  return (
    <div className='p-5 bg-[#1c1c1c] mt-10 mb-5 h-48 rounded'>
        
        {/* for heading  */}
        <div className='bg-red-400 gap-1 mb-2 py-2 px-4 flex justify-between items-center rounded'>
                        <h2 className='text-lg font-bold w-1/5  flex items-center justify-center'>Employee Name</h2>
                        <h3 className='text-lg font-bold w-1/5  flex items-center justify-center'>New Task</h3>
                        <h4 className='text-lg font-bold w-1/5  flex items-center justify-center'>Active Task</h4>
                        <h4 className='text-lg font-bold w-1/5  flex items-center justify-center'>Completed Task</h4>
                        <h4 className='text-lg font-bold w-1/5  flex items-center justify-center'>Failed</h4>
        </div>

        <div className='h-[80%] overflow-auto'>
            {userData.map(function(elem,idx){
                console.log(elem);
                return      <div key={idx} className='bg-black border-1 border-emerald-600 gap-1 mb-2 py-2 px-4 flex justify-between items-center rounded'>
                                <h2 className='flex items-center justify-center w-1/5 text-white'>{elem.firstName}</h2>
                                <h3 className='flex items-center justify-center w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
                                <h4 className='flex items-center justify-center w-1/5 text-yellow-400'>{elem.taskCounts.active}</h4>
                                <h4 className='flex items-center justify-center w-1/5 text-green-600'>{elem.taskCounts.completed}</h4>
                                <h4 className='flex items-center justify-center w-1/5 text-red-600'>{elem.taskCounts.failed}</h4>
                            </div>
             })}
        </div>
    </div>
  )
}

export default AllTaskInAdminPanel