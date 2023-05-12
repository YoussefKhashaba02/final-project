import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { checkTask, deleteTask, uncheckTask } from '../Js/Actions/Actions'
import { useState } from 'react';

const Task= (props)=> {
    const dispatch= useDispatch();
    const [check,setCheck]= useState(false);
    const handledelete= ()=>{
      dispatch(deleteTask(props.task))
    }
    const handleCheck=()=>{
        if(check){
            setCheck(false)
            dispatch(uncheckTask(props.task));
            
        }
        else{
            setCheck(true)
            dispatch(checkTask(props.task));
            
        }
    }

  return (
    <Card>
      <Card.Header as="h5">{props.task.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.task.description}
        </Card.Text>
        <Button variant="primary" onClick={handledelete}>Delete Task</Button>
        <Button style={!check? {color:"red"}: {color:"green"}} variant="primary" onClick={handleCheck}>{!check? "Check": "Uncheck"}</Button>
      </Card.Body>
    </Card>
  );
}

export default Task;