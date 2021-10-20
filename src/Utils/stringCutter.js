const stringCutter = (string, length) => {
  const newString = string.slice(0, length - 3).trim() + "...";

  return string.length > length ? newString : string;
};

export default stringCutter;
