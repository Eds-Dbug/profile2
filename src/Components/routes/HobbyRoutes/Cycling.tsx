import CyclingNavBar from '../../NavBar/CyclingNavBar';
import { cyclingCarouselData } from 'data/Data';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function Cycling() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home/cycling');
  },[]);

  const bikeMap = cyclingCarouselData.map((bike) => (
    <div key={bike.id}>
      <img className='' src={bike.src} />
      <p className="legend">{bike.legend}</p>
    </div>
  ))
	
  return (
		<div className="cycling">
			<div className="cycling__carousel">
				<Carousel showArrows autoPlay infiniteLoop>
					{/* replace divs with mapping so need to do data */}
          {bikeMap}
				</Carousel>
			</div>
			<div className="cycling__trips">
				{/* Need another navbar and cycling trips */}
					<CyclingNavBar />
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
