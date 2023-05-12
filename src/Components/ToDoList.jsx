import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Task from './Task'
import { filterTasks, unfilterTasks } from '../Js/Actions/Actions'
import { useState } from 'react'


const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const ToDoList= (props) => {
    const [filtered,setFiltered] = useState(false)
    const dispatch = useDispatch(); 
    const filter = (e) => {
        if(!filtered){
            setFiltered(true)
            dispatch(filterTasks(props.tasks))
        }

        else{
            setFiltered(false)
            dispatch(unfilterTasks)
        }

    }
    return (
            <div className='tasks'>
                <button onClick={filter}> {!filtered? "Filter undone": "Show All"}</button>
                {props.tasks.map((task, index) => 
                    <Task key={index} task={task}/>
                )}
             </div>
    )
}



export default connect(mapStateToProps)(ToDoList)