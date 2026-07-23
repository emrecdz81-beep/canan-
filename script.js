const reasons = [
  "Ich liebe dein wunderschönes Lächeln. ❤️",
  "Ich liebe deine Augen.",
  "Ich liebe, wie du mich glücklich machst.",
  "Ich liebe jede Sekunde mit dir.",
  "Ich liebe deine Umarmungen.",
  "Ich liebe dein Lachen.",
  "Ich liebe deine liebevolle Art.",
  "Ich liebe, dass du immer für mich da bist.",
  "Ich liebe dich mehr, als Worte beschreiben können.",
  "Und das sind erst die ersten 10 Gründe... ❤️"
];

let index = -1;

function nextReason() {
  index++;

  if (index < reasons.length) {
    document.getElementById("reason").innerHTML =
      `<h2>Grund ${index + 1}</h2><br>${reasons[index]}`;
  } else {
    document.getElementById("reason").innerHTML =
      `<h2>❤️ Für Canan ❤️</h2><br>
      Selbst 100 Gründe reichen nicht aus, um dir zu sagen, wie sehr ich dich liebe.<br><br>
      Ich liebe dich für immer. 🌙✨`;
  }
}