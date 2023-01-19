import { CyclingText } from 'data/Data';

export default function Niagra() {
	const niagraMap = CyclingText.filter((item) => item.id === 'Niagra').map(
		(item, i) => (
			<div key={i}>
				<img src={item.pic} alt="Niagra" />
				<p>{item.text}</p>
			</div>
		)
	);

	return <>{niagraMap}</>;
}
