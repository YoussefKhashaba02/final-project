import Login from '../Components/Login';
import Button from 'react-bootstrap/Button';
import ControlledCarousel from '../Components/ControlledCarousel';
import { useNavigate } from 'react-router-dom';

const HomePage= ()=> {
    const navigate= useNavigate();
  return (
    <div>
    <ControlledCarousel/>
    <Login/>
    <Button variant="primary" onClick={()=> navigate('/ToDo')}>
        Login
      </Button>
    
    </div>
  );

}

export default HomePage;