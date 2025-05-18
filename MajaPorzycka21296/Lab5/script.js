// Zadanie 1
const tablica = ['pies', 'kot', 'słoń', 'żółw', 'gekon'];
document.getElementById('zad1-output').innerHTML += `<p>Element 2: ${tablica[1]}</p>`;

tablica[tablica.length - 1] = 'lis';
document.getElementById('zad1-output').innerHTML += `<p>Ostatni zmieniony element: ${tablica[tablica.length - 1]}</p>`;

tablica[5] = 'ptak';
tablica[tablica.length] = 'chomik';
tablica.push('szczur', 'kangur');
tablica.unshift('jeż');

document.getElementById('zad1-output').innerHTML += `<p>Tablica: ${tablica.join(', ')}</p>`;

tablica.pop();
tablica.shift();
document.getElementById('zad1-output').innerHTML += `<p>Po usunięciach: ${tablica.join(', ')}</p>`;

// Zadanie 2
const nowaTablica = ['pomidor', 'ogórek', 'cebula'];
document.getElementById('zad2-output').innerHTML += `<p>Pierwszy: <strong>${nowaTablica[0]}</strong></p>`;
document.getElementById('zad2-output').innerHTML += `<p>Ostatni: <strong>${nowaTablica[nowaTablica.length - 1]}</strong></p>`;

nowaTablica.unshift('marchewka');
document.getElementById('zad2-output').innerHTML += `<p>Nowy pierwszy: <strong>${nowaTablica[0]}</strong></p>`;

// Zadanie 3
const formsCount = document.forms.length;
document.getElementById('zad3-output').innerHTML =
  `<p>Na stronie jest <strong>${formsCount}</strong> formularzy (sekcja dokument.forms).</p>`;

// Zadanie 4
const dane = ['Maja Porzycka', '21296', 'Elbląg', 'Informatyka'];
document.getElementById('dane').innerHTML =
  `<p id="imie">${dane[0]}</p><p id="miasto">${dane[2]}</p>`;

let i = 0;
let half = '';
while (i < Math.floor(tablica.length / 2)) {
  half += tablica[i] + ' ';
  i++;
}
document.getElementById('dane').innerHTML += `<p>Połowa (while): ${half}</p>`;

let half2 = '';
for (let i = 0; i < Math.floor(tablica.length / 2); i++) {
  half2 += tablica[i] + ' ';
}
document.getElementById('dane').innerHTML += `<p>Połowa (for): ${half2}</p>`;

function pokazDane() {
  const imie = document.getElementById('imie').innerText;
  const miasto = document.getElementById('miasto').innerText;
  alert(`Dane:\nImię: ${imie}\nMiasto: ${miasto}`);
}

// Zadanie 5 – Quiz
const questions = [
    ['Ile nóg ma pies?', 4],
    ['Ile dni ma tydzień?', 7],
    ['Ile miesięcy ma rok?', 12]
  ];
  
  let score = 0;
  let currentQuestion = 0;
  const quizBox = document.getElementById('quiz-box');
  
  function showQuestion() {
    if (currentQuestion < questions.length) {
      const q = questions[currentQuestion];
      quizBox.innerHTML = `
        <p>${q[0]}</p>
        <input type="number" id="answer" />
        <button onclick="checkAnswer()">Sprawdź</button>
      `;
    } else {
      quizBox.innerHTML = `<p>Koniec quizu! Twój wynik to: ${score}/${questions.length}</p>`;
    }
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = questions[currentQuestion][1];
  
    if (userAnswer === correctAnswer) {
      alert('Dobrze!');
      score++;
    } else {
      alert(`Źle. Prawidłowa odpowiedź to ${correctAnswer}`);
    }
  
    currentQuestion++;
    showQuestion();
  }
  
  showQuestion();
  