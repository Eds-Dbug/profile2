import React from 'react';
import '../../styles/Hobbies/Cycling.scss';
import {IN_PROGRESS} from '../../Pictures';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';

export default function Cycling() {
  return (
		<div className="cycling">
			<div className="cycling__carousel">
				<Carousel
					showArrows={true}
				>
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
			<div className="cycling__trips"></div>
		</div>
	);
}
