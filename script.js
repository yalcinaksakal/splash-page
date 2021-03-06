const { body } = document;

// let count = 0;
// const ourMemory = {
//   [count]: Array(10000).fill("*"),
// };

function changeBackground(number) {
  //   count++;
  //   ourMemory[count] = Array(10000).fill("*");
  let prevBG;
  if (body.className) {
    prevBG = body.className;
  }

  body.className = "";
  switch (number) {
    case "1":
      return prevBG === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return prevBG === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return prevBG === "background-3"
        ? false
        : body.classList.add("background-3");
    default:
      break;
  }
}
