import EditTask from "../components/EditTask";
import DisplayTask from "../components/DisplayTask";
function App() {
  return (
    <div className="min-h-[100vh] flex">
      <DisplayTask/>
      <EditTask/>
    </div>
  );
}

export default App;
