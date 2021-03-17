function scuberGreetingForFeet(rideLength){
  let response
  if (rideLength > 2500) {
    response = 'No can do.'
  } else if (rideLength > 2000) {
    response = 'I will gladly take your thirty bucks.'
  } else if(rideLength <= 400) {
    response = 'This one is on me!'
  }
   return response
}

function ternaryCheckCity(destination){
  const city = "NYC";
  const cityDestination = destination === city ? "Ok, sounds good." : "No go.";

  return cityDestination;
}

function switchOnCharmFromTip(tip){
  let response = '';
  switch (tip) {
    case 'generous':
        response = "Thank you so much.";
        break;
    case 'not as generous':
        response = "Thank you.";
        break;
    default:
        response = 'Bye.';
  }
  return response
}