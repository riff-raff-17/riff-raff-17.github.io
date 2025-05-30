document.addEventListener('DOMContentLoaded', () => {
  const icebreakers = [
    "If you could have dinner with any historical figure, who would it be?",
    "What’s your go-to karaoke song?",
    "If you were a superhero, what would your power be?",
    "What’s the last book you read and loved?",
    "If you could travel anywhere tomorrow, where would you go?",
    "What’s the weirdest food you’ve ever tried?",
    "What’s one hobby you’d love to pick up?",
    "If you could only watch one movie for the rest of your life, which would it be?",
    "What’s one piece of advice you’ve received that stuck with you?",
    "What’s your favorite way to unwind after a long day?"
  ];

  const btn = document.getElementById('generate-btn');
  const display = document.getElementById('icebreaker');

  btn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * icebreakers.length);
    display.textContent = icebreakers[index];
  });
});
