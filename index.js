function scuberGreetingForFeet(distance){
  if (distance <= 2000) { return `This one is on me!`; } 
  else if (distance > 2500) { return `No can do.`; }
  else { return `I will gladly take your thirty bucks.`; }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? `Ok, sounds good.` : `No go.`
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
  }
}