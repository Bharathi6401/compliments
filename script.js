compliments=["You're amazing! 🌟",
  "You're a coding superstar 💻✨",
  "You light up the room 💡",
  "You're doing great, keep going! 🚀",
  "You're one of a kind 💖"]

  function show_compliment(){
    var randomindex=Math.floor(Math.random()* compliments.length);
    compliment=compliments[randomindex];
    document.getElementById("compliment").textContent=compliment

  }