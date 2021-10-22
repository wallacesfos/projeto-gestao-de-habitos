const dateFormater = (date) => {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const currentDate = new Date(date);
  const formatedDate = `${currentDate.getDate()} de ${
    meses[currentDate.getMonth()]
  } de ${currentDate.getFullYear()}`;

  return formatedDate;
};

export default dateFormater;
