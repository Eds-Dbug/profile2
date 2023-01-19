import ActiveNavBar from '../NavBar/ActiveNavBar';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import './_root.scss';
import { useEffect } from 'react';

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, []);
  
  return (
    <div className='root'>
      <ActiveNavBar/>
      <Outlet/>
    </div>
  )
}
