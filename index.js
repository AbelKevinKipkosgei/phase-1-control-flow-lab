function scuberGreetingForFeet(someValue) {
  // Write your code here!
  let showMessage;
  if (someValue <= 400) {
    showMessage = "This one is on me!";
  } else if (someValue > 400 && someValue <= 2000) {
    showMessage = "That will be twenty bucks.";
  } else if (someValue > 2000 && someValue <= 2500) {
    showMessage = "I will gladly take your thirty bucks.";
  } else {
    showMessage = "No can do.";
  }
  return showMessage;
}

function ternaryCheckCity(city) {
  // Write your code here!
  let destination = city === "NYC" ? "Ok, sounds good." : "No go.";
  return destination;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let message;
  switch (tip) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
      break;
  }
  return message;
}
