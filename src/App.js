import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';
function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks , setTasks] = useState([{
    id:0,
    text:'Hello World',
    day:'20020',
    reminder:true,

},
{
    id:1,
    text:'Hello World1',
    day:'20020',
    reminder:true
}, 
{
    id:2,
    text:'Hello World2',
    day:'20020',
    reminder:false
}]

)
//Delete 
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
//Add task
const addTask = (task) =>{
  const id=Math.floor(Math.random()*1000 + 1)
  const newTask = {id,... task}
  setTasks([...tasks,newTask])
}


//Reminder
const toggleReminder =(id) =>{
  setTasks(tasks.map((task)=> task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="App">
      <Header title="Task Trackker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask&&<AddTask onAdd={addTask}/>}
      {tasks.length >0?<Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/>:'No Task to Show'}
    </div>
  );
}

export default App;
