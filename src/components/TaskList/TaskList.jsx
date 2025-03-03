import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data);
  return (
    <div id='taskList' className='flex items-center overflow-x-auto justify-start gap-10 flex-nowrap h-[55%] w-full mt-20 py-5'>
        {data.tasks.map((elem, index) => {
        if (elem.failed) {
          return <FailedTask key={index} data={elem}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={index} data={elem}/>;
        }
        if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        }
        
        // Default case
        return null;
      })}
    </div>
  )
}

export default TaskList