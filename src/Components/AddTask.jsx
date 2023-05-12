import { addTask } from '../Js/Actions/Actions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';

const AddTask = props =>{
    const dispatch = useDispatch();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const handleAdd = (e) => {
        e.preventDefault()
        const task = {
            id: Date.now(),
            title,
            description,
            done : false
        }
        dispatch(addTask(task))    
    }
    return (
        <div className='rectangle'>
            Add Task
            <input placeholder='Enter Title' type="text" onChange={e => setTitle(e.target.value)}/>
            <input placeholder='Enter Description' type="text" onChange={e => setDescription(e.target.value)}/>
            <Button variant="primary" onClick={handleAdd}>Add</Button>
        </div>
    )
}

export default AddTask