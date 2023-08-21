import Brand from './Brand';
import Categories from './Categories';
import Colors from './Colors';
import Price from './Price';

export default function Filters() {
  return (
    <div>
      <Categories />
      <Brand />
      <Colors />
      <Price />
    </div>
  );
}
