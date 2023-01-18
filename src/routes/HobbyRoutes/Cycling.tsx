import CyclingNavBar from '../../NavBar/CyclingNavBar';
import '../../styles/Hobbies/Cycling.scss';
import {IN_PROGRESS} from '../../Pictures';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Outlet } from 'react-router';

export default function Cycling() {
	
  return (
		<div className="cycling">
			<div className="cycling__carousel">
				<Carousel showArrows={true}>
					{/* replace divs with mapping so need to do data */}
					<div>
						<img src={IN_PROGRESS} />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src={IN_PROGRESS} />
						<p className="legend">Legend 2</p>
					</div>
					<div>
						<img src={IN_PROGRESS} />
						<p className="legend">Legend 3</p>
					</div>
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
