import EditTask from "../components/EditTask";
import DisplayTask from "../components/DisplayTask";
import { useState, useEffect, useCallback } from "react";
function App() {
  const [tasks, setTasks] = useState([])
  const taskSetter = useCallback((state)=>setTasks(state), [])
  return (
    <div className="min-h-[100vh] flex">
      <DisplayTask tasks={tasks}/>
      <EditTask setTasks={taskSetter}/>
    </div>
  );
}

export default App;
