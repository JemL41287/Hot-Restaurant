const table = [
  {
    id: "1",
    name: "elena",
    email: "elena@gmail.com",
    phone: "540-236-2223"
  }
];

const waitlist = [];

function add(newReservation) {
  const resSize = table.length;
  if (resSize < 5) {
    table.push(newReservation);
  } else waitlist.push(newReservation);
}
