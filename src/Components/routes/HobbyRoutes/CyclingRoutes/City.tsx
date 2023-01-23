import {CyclingText} from 'data/Data';
import styles from './_Hobbies.module.scss';

export default function City() {
  const cityMap = CyclingText.filter((item) => item.id === 'Fun').map((item,i) => (
     <div className={styles.place} key={i}>
      <img className={styles.place__img} src={item.pic} alt="Toronto" />
      <p className={styles.place__description}>{item.text}</p>
    </div>)
  );

  return <>{cityMap}</>;
}
