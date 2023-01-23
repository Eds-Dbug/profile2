import { CyclingText } from 'data/Data';
import styles from './_Hobbies.module.scss';

export default function GeorgianBay() {
	const bayMap = CyclingText.filter((item) => item.id === 'Georgian Bay').map(
		(item, i) => (
			<div className={styles.place} key={i}>
				<img className={styles.place__img} src={item.pic} alt="Georgian Bay" />
				<p className={styles.place__description}>{item.text}</p>
			</div>
		)
	);

	return <>{bayMap}</>;
}
