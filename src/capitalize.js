const capitalize = (anyWord) => {
  if (anyWord === '') {
    return '';
  }
  const firstLetter = anyWord[0].toUpperCase();
  const restOfString = anyWord.slice(1);
  return `${firstLetter}${restOfString}`;
};

export default capitalize;
