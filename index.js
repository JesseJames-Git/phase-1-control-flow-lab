function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  }
  if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  }
  if (distance > 2500) {
    return 'No can do.';
  }
  if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  let cityResponse = city === 'NYC' ? ('Ok, sounds good.') : ('No go.')
  return cityResponse
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){

    case 'generous':
      return('Thank you so much.')
    
    case 'not as generous':
      return('Thank you.')
  

    default:
      return('Bye.')
  }
}
switchOnCharmFromTip('generous')
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip('thanks for everything')