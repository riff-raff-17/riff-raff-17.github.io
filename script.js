document.addEventListener('DOMContentLoaded', () => {
  // Define all your theme arrays here:
  const themes = {
    general: [
      "If you could have dinner with any historical figure, who would it be?",
      "What’s your go-to karaoke song?",
      "If you were a superhero, what would your power be?",
      "What’s the last book you read and loved?",
      "If you could travel anywhere tomorrow, where would you go?"
    ],
    work: [
      "What’s one skill you’re currently working on improving?",
      "What was your first job, and what did you learn from it?",
      "If you could redesign your workspace, what’s one thing you’d change?",
      "What’s the best piece of career advice you’ve ever received?",
      "How do you stay motivated during a tough project?"
    ],
    fun: [
      "What’s the weirdest food you’ve ever tried?",
      "If you could have any animal (real or imaginary) as a pet, what would it be?",
      "What’s one hobby you’d love to pick up?",
      "If you could only watch one movie for the rest of your life, which would it be?",
      "What’s the funniest thing that’s happened to you recently?"
    ],
    deep: [
      "What’s one experience that shaped who you are today?",
      "If you could send a message to your future self, what would it say?",
      "What’s a challenge you overcame that you’re proud of?",
      "What’s a belief you held strongly but later changed your mind about?",
      "How do you define success for yourself?"
    ]
  };

  // Figure out which theme to use from <body data-theme="...">
  const themeKey = document.body.getAttribute('data-theme') || 'general';
  const icebreakers = themes[ themeKey ] || themes.general;

  // DOM elements
  const btn = document.getElementById('generate-btn');
  const display = document.getElementById('icebreaker');

  // On click, pick a random prompt
  btn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * icebreakers.length);
    display.textContent = icebreakers[i];
  });
});
