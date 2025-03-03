import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, settaskTitle] = useState("");
    const [taskDate, settaskDate] = useState("");
    const [assignTo, setassignTo] = useState("");
    const [category, setcategory] = useState("");
    const [taskDescription, settaskDescription] = useState("");

    const [newTask, setNewTask] = useState({});


  const submitHandler = (e)=>{
    e.preventDefault();
    // console.log(taskTitle, taskDate, assignTo, category, taskDescription);
    
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false});
    // console.log(task);
    
    const data = userData;
    console.log(data);

    data.forEach(function(elem){
        // console.log(elem.firstName);
        if(assignTo == elem.firstName){
            // console.log(elem.tasks);
            elem.tasks.push(newTask);
            // console.log(elem);
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        }
    })

    setUserData(data);

     // Update localStorage after modification
        // localStorage.setItem("employees", JSON.stringify(data));

    settaskTitle("");
    settaskDate("");
    setassignTo("");
    setcategory("");
    settaskDescription("");
    
  }  

//   useEffect(() => {
//     console.log(task);
//     }, [task]);

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-wrap w-full justify-between items-start w-full'>
                <div className='w-1/2 py-5'>

                    {/* taskTitle  */}
                    <div>
                        <h3 className='text-sm text-gray-300 kb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{settaskTitle(e.target.value)}} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a task.' />
                    </div>

                    {/* taskDate  */}
                    <div>
                        <h3 className='text-sm text-gray-300 kb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e)=>{settaskDate(e.target.value)}} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>

                    {/* employee name  */}
                    <div>
                        <h3 className='text-sm text-gray-300 kb-0.5'>Assign to</h3>
                        <input value={assignTo} onChange={(e)=>{setassignTo(e.target.value)}} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>

                    {/* category  */}
                    <div>
                        <h3 className='text-sm text-gray-300 kb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{setcategory(e.target.value)}} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev,etc.' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-center'>

                    {/* Description  */}
                    <div>
                        <h3 className='text-sm text-gray-300 kb-0.5'>Description</h3>
                        <textarea value={taskDescription} onChange={(e)=>{settaskDescription(e.target.value)}} required className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols={100} rows={10}></textarea>
                    </div>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-1 w-full">Create Task</button>
                </div>
            </form>
    </div>
  )
}

export default CreateTask