import { IN_PROGRESS } from 'assets/Pictures';
import styles from './_Minis.module.scss';

export default function Minis() {
  return (
		<div className={styles.minis}>
			<img className={styles.minis__img} src={IN_PROGRESS} />
		</div>
	);
}
