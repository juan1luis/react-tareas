import {useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext'; 

export default function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        createTask(title,description)
        setTitle('')
        setDescription('')
    };


  return (
    <div className='max-w-md mx-auto'>
        <form className='bg-slate-900 p-10 mb-4' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-white mb-3'>Colocar Tareas</h1>
            <input placeholder='Write task' 
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            value ={title} className='bg-slate-200 p-3 w-full mb-2'
            autoFocus/>

            <textarea placeholder= 'Description'
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            value={description} className='bg-slate-200 p-3 w-full mb-2'
            />
            <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300'>Save</button>
            
        </form>
    </div>
  )
}
