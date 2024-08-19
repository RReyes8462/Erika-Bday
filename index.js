const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Happy Birthday Present Erika!! -Red",
    "I Lorb uu hehehee... -Red",
    "Is this luv? -Red",
    "You are the cutest !! -Red",
    "U r so gym girl! -Red",
    "Smartest Nurse/CNA Girl!!!! -Red",
    "Best eater!! -Red",
    "Makeup Professional :D -Red",
    "Hai my bebeee -Red",
    "Pigeon whisperer?!?! -Red",
    "Best Nami Cosplayer !! -Red",
    "Best Erza Cosplayer !! -Red",
    "Best Misty Cosplayer !! -Red",
    "Herro Girlfriend ;) -Red",
    "Ur Poggers -Manda",
    "Ur so awesome sauce! -verlyn",
    "Sexy mama -Mish",
    "Bestie poo -Mish",
    "Best chem partner eva -Mish",
    "Greatest climber of all time -Mish",
    "Thanks for letting me nap -Mish"
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})