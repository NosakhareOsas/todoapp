import EditTask from "../components/EditTask";
import DisplayTask from "../components/DisplayTask";
import { useState, useCallback } from "react";
function App() {
  const [tasks, setTasks] = useState([])
  const taskSetter = useCallback((state)=>setTasks(state), [])
  return (
    <div className="min-h-[100vh] flex">
      <DisplayTask tasks={tasks} setTasks={taskSetter}/>
      <EditTask setTasks={taskSetter} tasks={tasks}/>
    </div>
  );
}

export default App;
