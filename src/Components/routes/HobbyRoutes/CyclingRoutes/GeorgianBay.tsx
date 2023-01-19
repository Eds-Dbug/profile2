import { CyclingText } from 'data/Data';

export default function GeorgianBay() {
	const bayMap = CyclingText.filter((item) => item.id === 'Georgian Bay').map(
		(item, i) => (
			<div key={i}>
				<img src={item.pic} alt="Georgian Bay" />
				<p>{item.text}</p>
			</div>
		)
	);

	return <>{bayMap}</>;
}
