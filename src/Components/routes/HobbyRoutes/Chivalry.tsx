import { IN_PROGRESS } from 'assets/Pictures';
import styles from './_Chivalry.module.scss';

export default function Chivalry() {
  return (
		<div className={styles.chivalry}>
			<img className={styles.chivalry__img} src={IN_PROGRESS} />
		</div>
	);
}
