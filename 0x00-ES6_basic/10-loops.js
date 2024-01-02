export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.indexof(value);
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  }

  return array;
}
