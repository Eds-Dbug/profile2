import ActiveNavBar from '../NavBar/ActiveNavBar';
import { Outlet } from 'react-router';
import '../styles/routes/root.scss';

export default function Root() {
  
  return (
    <div className='root'>
      <ActiveNavBar/>
      <Outlet/>
    </div>
  )
}
