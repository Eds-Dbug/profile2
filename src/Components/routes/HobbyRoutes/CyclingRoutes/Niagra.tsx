import { CyclingText } from 'data/Data';
import styles from './_Hobbies.module.scss';

export default function Niagra() {
	const niagraMap = CyclingText.filter((item) => item.id === 'Niagra').map(
		(item, i) => (
			<div className={styles.place} key={i}>
				<img className={styles.place__img} src={item.pic} alt="Niagra" />
				<p className={styles.place__description}>{item.text}</p>
			</div>
		)
	);

	return <>{niagraMap}</>;
}
