function scuberGreetingForFeet(price){
  if (price <=400){
    return 'This one is on me!'
  }
  else if (price <=2499){
    return  'I will gladly take your thirty bucks.'
  }
  else (price >2500)
    return 'No can do.'
}
console.log(scuberGreetingForFeet());
function ternaryCheckCity(city){
  if (city === "NYC"){
    return 'Ok, sounds good.'
  }
  else (city !== "NYC")
    return 'No go.'
  }
console.log(ternaryCheckCity())
function switchOnCharmFromTip(trip){
if (trip === "generous"){
  return 'Thank you so much.'
}
else if (trip === "not as generous"){
  return 'Thank you.'
}
else (trip !== "any thing else")
  return 'Bye.'
}
console.log(switchOnCharmFromTip())
console.log(ternaryCheckCity())
function switchOnCharmFromTip(trip){
if (trip === "generous"){
  return 'Thank you so much.'
}
else if (trip === "not as generous"){
  return 'Thank you.'
}
else (trip !== "any thing else")
  return 'Bye.'
}