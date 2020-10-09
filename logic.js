
//Variable for haul location
var haul = Math.ceil(Math.random() * 25)

//Variable for our alien location.
var alien = Math.ceil(Math.random() * 25)

//While loop that checks if the haul and the alien are in the same place.
while(haul === alien) {
  haul = Math.ceil(Math.random() * 25)
}

//CHEATS, SHHH.
console.log("Haul", haul)
console.log("Alien", alien)

//Clicks remaining.
var scansRemaining = 15


//Function that lowers the clicks remaining, checks if the click is the alien or the haul or an asteroid.
const scan = (sector) => {
  scansRemaining --
  document.getElementById("scans").innerHTML = scansRemaining

  if(sector === haul){
    document.getElementById(sector).innerHTML = "<img src='gold.png' height='50px'>"
    setTimeout(function(){alert("You found the golden asteroid! We're rich!")}, 500)
    document.getElementById("space").style.pointerEvents = "none"
  } else if(sector === alien) {
    document.getElementById("space").innerHTML = "<img src='https://steamuserimages-a.akamaihd.net/ugc/934928288657222734/11D78E7375094444174D3388147D1A8B6D8E331A/' height='500px' class='alien'>"
    setTimeout(function(){alert("Your brains have been EATEN by the aliens!")}, 500)
    document.getElementById("space").style.pointerEvents = "none"
  } else if( scansRemaining > 0){
    document.getElementById(sector).innerHTML = "<img src='asteroid.png' height='50px'>"
    document.getElementById(sector).style.pointerEvents = "none"
  } else {
    scansRemaining = 0
    document.getElementById("scans").innerHTML = scansRemaining
    document.getElementById(sector).innerHTML = "<img src='asteroid.png' height='50px'>"
    setTimeout(function(){alert( "You've run out of scans! The haul is lost.")}, 500)
    document.getElementById("space").style.pointerEvents = "none"
  }
}
