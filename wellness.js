  // Tips
// Responsive Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if(navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }
});
  const tips=["Take 5 min to breathe","Drink water","Take short breaks","Practice gratitude","Listen to calming music","Go for a short walk","Keep a journal","Sleep 7+ hours","Connect with a friend","Meditate daily"];
  const tipDisplay=document.getElementById('tipDisplay');
  document.getElementById('getTip').addEventListener('click',()=>{tipDisplay.textContent=tips[Math.floor(Math.random()*tips.length)]});

  // Journal
  function saveEntry(){const entry=document.getElementById('journalInput').value;if(entry.trim()==="") return alert("Nothing to save!");localStorage.setItem('journalEntry',entry);alert("Journal saved!")}
  function downloadEntry(){
    const entry = document.getElementById('journalInput').value;
    if(entry.trim() === "") return alert("Nothing to download!");
    // jsPDF required
    const doc = new window.jspdf.jsPDF();
    doc.setFontSize(14);
    doc.text(entry, 15, 20);
    doc.save('journal.pdf');
  }
  function deleteEntry(){if(confirm("Delete your entry?")){document.getElementById('journalInput').value="";localStorage.removeItem('journalEntry');}}

  // Games
  let rpsCompChoice="";
  function playRPS(userChoice){const choices=["Rock","Paper","Scissors"];rpsCompChoice=choices[Math.floor(Math.random()*3)];let result="";if(userChoice===rpsCompChoice) result="It's a tie!";else if((userChoice==="Rock"&&rpsCompChoice==="Scissors")||(userChoice==="Paper"&&rpsCompChoice==="Rock")||(userChoice==="Scissors"&&rpsCompChoice==="Paper")) result="You win!";else result="You lose!";document.getElementById('rps-result').textContent=`Computer chose ${rpsCompChoice}. ${result}`;}

  function startNumberGuess(){const num=Math.floor(Math.random()*10)+1;const guess=prompt("Guess number 1-10");if(Number(guess)===num) alert("Correct!");else alert(`Wrong! Number was ${num}`);}
  function coinFlip(){const res=Math.random()<0.5?"Heads":"Tails";document.getElementById('coin-result').textContent=`Result: ${res}`;}
  function diceRoll(){const roll=Math.floor(Math.random()*6)+1;document.getElementById('dice-result').textContent=`Dice: ${roll}`;}
  const colors=["Red","Blue","Green","Yellow"]; const picked=colors[Math.floor(Math.random()*colors.length)];
  function colorGuess(){const guess=document.getElementById('color-guess').value;if(guess.toLowerCase()===picked.toLowerCase()) document.getElementById('color-result').textContent="Correct!"; else document.getElementById('color-result').textContent=`Wrong! Color was ${picked}`;}
  const words=["wellness","mind","focus","health"]; let word=words[Math.floor(Math.random()*words.length)];
  function wordUnscramble(){const scrambled=word.split('').sort(()=>0.5-Math.random()).join('');const guess=prompt(`Unscramble: ${scrambled}`);if(guess?.toLowerCase()===word) alert("Correct!"); else alert(`Wrong! Word was ${word}`);}
