
import { useContext } from "react"
import {TaskContext} from '../context/TaskContext'


export default function TaskCard ({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className="bg-slate-800 text-white p-4 rounded-md">           
            <h1 className="text-xl font-bold capitalize ">{task.title}</h1>
            <p className="text-gray-400 text-sm ">{task.description}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-5 hover:bg-red-300" 
            onClick={()=>deleteTask(task.id)}>
              Eliminar
            </button>
    </div>
  )
}
