import { useState } from "react";

export default function TaskItem({task, setTasks}){
    const [isEdit, setIsEdit] = useState(false)
    const [newTask, setNewTask] = useState(task.task)
    const handleChange = (event)=>setNewTask(event.target.value)

    const handleEdit = ()=>{
        setIsEdit(true)
    }
    const handleUpdate =()=>{
        setTasks(prevTasks => prevTasks.map(item => task.id === item.id ? { ...item, task: newTask } : item ))
        setIsEdit(false)
    }
    return (
        <div className="flex justify-between p-2 border-2 m-2 shadow-lg">
            {!isEdit ?
            <>
                <label className="inline-flex items-center"> 
                    <input type="checkbox" className="text-[#399649]" name="option" value="1" /> 
                    <span class="ml-2 ">{task.task}</span> 
                </label>
                <button 
                    onClick={handleEdit}
                    className="border-2 border-[#071d55] text-[#071d55] px-2 py-1 rounded-md">
                        Edit
                </button>
            </>:
            <>
            <div className="border-2 border-[#CBCBCB] rounded-md my-1">
              <input
                className="border-none p-2 w-full"
                value={newTask}
                onChange={handleChange}
              />
            </div>
            <button 
                onClick={handleUpdate}
                className="border-2 border-[#33b954] text-[#071d55] px-2 py-1 rounded-md">
                    Update
            </button>
            </>}
        </div>
    );
}