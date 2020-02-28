function addreservation(reserve, waitList, newReservation) {
  const resSize = reserve.length;
  if (resSize < 5) {
    reserve.push(newReservation);
  } else waitList.push(newReservation);
}

module.exports = addreservation;
