import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../data/task'

export const TaskContext = createContext()


export default function TaskContextProvider(props) {
    
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle,taskDescription){
        setTasks([...tasks,{
          id:tasks.length,
          title:taskTitle,
          description:taskDescription
        }])
      }

      function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId))
      } 

        
  useEffect(() => {
    setTasks(data)
  }, [])
    

  return (
    <TaskContext.Provider value = {{
        tasks:tasks,
        deleteTask:deleteTask,
        createTask:createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
