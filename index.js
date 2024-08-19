const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Happy Birthday Present Erika!!",
    "I Lorb uu hehehee...",
    "Is this luv?",
    "You are the cutest !!",
    "U r so gym girl!",
    "Smartest Nurse/CNA Girl!!!!",
    "Best eater!!",
    "Makeup Professional :D",
    "Hai my bebeee",
    "Pigeon whisperer?!?!",
    "Best Nami Cosplayer !!",
    "Best Erza Cosplayer !!",
    "Best Misty Cosplayer !!",
    
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})