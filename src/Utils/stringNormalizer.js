const stringNormalizer = (string) => {
  const specialLetters = {
    á: "a",
    à: "a",
    ã: "a",
    â: "a",
    é: "e",
    ê: "e",
    í: "i",
    ó: "o",
    ô: "o",
    õ: "o",
    ú: "u",
    ç: "c",
  };

  const momalizedString = string
    .toLowerCase()
    .trim()
    .split("")
    .reduce((acc, char) => {
      const letter = specialLetters[char];

      return letter ? acc + letter : acc + char;
    }, "");

  return momalizedString;
};

export default stringNormalizer;
