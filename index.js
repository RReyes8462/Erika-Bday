const genText = document.getElementById("gen-text")

var messages = [
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
  "Thanks for letting me nap -Mish",
  "Twin flame -Le",
  "CEO of rocking every hair color -Le",
  "Cutest gal -Le",
  "Thither -Manda",
  "Biggest Gyatt !?!! -Red",
  "Professional Tattoo Artist :O -Red",
  "Beetlejuice luvr -Red",
  "Karaoke kween :D -Red",
  "U r kaweewee -Ryree",
  "U R SO SLAY -AG",
  "Happy bday kakay, i love you always! -Yan",
  "Thank u for fun memories :)) -Yan",
  "My gingerbread girl -Yan",
  "ERIKAAA so glad we reconnected again!! -Ray",
  "U grew up so so beautiful and i love youuu -Ray"
]
const textEl = document.querySelector(".textMessage")
var makeGetUniqueRandomNumber = (x) => {
  const chosenNumbers = new Set();
  return () => {
    if (chosenNumbers.size === x) {
      const chosenNumbers = new Set();
    }
    let num;
    do {
      num = Math.floor(Math.random() * x);
    } while (chosenNumbers.has(num));
    chosenNumbers.add(num);
    return num;
  };
};
var getRandMsgs = makeGetUniqueRandomNumber(messages.length);
var count =1;
genText.addEventListener("click", function() {
  count++;
  if (count === messages.length){
    getRandMsgs = makeGetUniqueRandomNumber(messages.length);
    count = 0;
  }
  textEl.textContent = messages[getRandMsgs()]
})