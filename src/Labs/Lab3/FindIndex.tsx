let numberArray1 = [1, 2, 4, 5, 6];
let stringArray1 = ['string1', 'string3'];

export default function FindIndex() {
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');
return (
    <div>
      <h4>Find Index Function</h4>
      <p>fourIndex = {fourIndex}</p>
      <p>string3Index = {string3Index}</p>
    </div>
  );
}