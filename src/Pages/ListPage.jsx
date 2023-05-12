import AddTask from "../Components/AddTask";
import ToDoList from "../Components/ToDoList";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ListPage=()=>{
    const navigate= useNavigate();
    return(
        <div>
        <AddTask/>
        <ToDoList/>
        <Button variant="primary" onClick={()=> navigate('/Login')}>
        Logout
      </Button>
        </div>
)
    
}
export default ListPage;