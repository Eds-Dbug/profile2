import {CyclingText} from '../../../data/Data'

export default function City() {
  const cityMap = CyclingText.filter((item) => item.id === 'Fun').map((item,i) => (
     <div key={i}>
      <img src={item.pic} alt="Toronto" />
      <p>{item.text}</p>
    </div>)
  );

  return <>{cityMap}</>;
}
