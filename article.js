// JS for the mental-state-questions-section (multiple choice scoring)
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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.mental-state-questions-form');
  if (!form) return;

  // Scoring map for each question's options (from best to worst)
  const scoreMap = {
    q1: ['Very good', 'Good', 'Neutral', 'Bad', 'Very bad'],
    q2: ['Not at all', 'A little', 'Sometimes', 'Often', 'Almost always'],
    q3: ['Very well', 'Well', 'Average', 'Poorly', 'Very poorly'],
    q4: ['Very connected', 'Somewhat connected', 'Neutral', 'A little connected', 'Not at all connected'],
    q5: ['Exercise', 'Talking to someone', 'Meditation or mindfulness', 'Hobbies', 'Other']
  };

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let totalScore = 0;
    let unanswered = false;
    let answers = [];

    // For each question, get the selected value and score
    Object.keys(scoreMap).forEach(function(q, idx) {
      const checked = form.querySelector('input[name="' + q + '"]:checked');
      if (!checked) {
        unanswered = true;
        return;
      }
      answers.push(checked.value);
      // Lower index = better answer, higher = worse
      const score = scoreMap[q].indexOf(checked.value) + 1; // 1 to 5
      totalScore += score;
    });

    if (unanswered) {
      alert('Please answer all questions before saving.');
      return;
    }

    // Save to localStorage (optional)
    localStorage.setItem('mentalStateAnswers', JSON.stringify(answers));
    localStorage.setItem('mentalStateScore', totalScore);

    // Give advice based on score (lower is better)
    let advice = '';
    if (totalScore <= 7) {
      advice = 'You seem to be doing well! Keep up your healthy habits and continue to check in with yourself.';
    } else if (totalScore <= 13) {
      advice = 'You are doing okay, but there may be some areas to improve. Consider more self-care and talking to someone you trust.';
    } else if (totalScore <= 18) {
      advice = 'You may be experiencing some challenges. Try to reach out to friends, family, or a mental health professional for support.';
    } else {
      advice = 'It looks like you are struggling. Please consider seeking help from a counselor or mental health professional soon.';
    }

    alert('Your answers have been saved! Your score: ' + totalScore + '\n' + advice);
    form.reset();
  });
});


document.querySelector(".newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form submission
    const email = document.getElementById("emailInput").value.trim();

    if (email === "") {
      // do nothing if empty
      return;
    }

    alert("Subscribed!");
    this.reset(); // clears the input after subscription
  });