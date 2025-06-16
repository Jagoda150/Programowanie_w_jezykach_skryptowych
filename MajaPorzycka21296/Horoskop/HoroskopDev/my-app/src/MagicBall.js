import { useState } from 'react';

export default function MagicBall() {
  const answers = ["Tak", "Nie", "Może", "Wszechświat nie wie"];
  const [result, setResult] = useState('');

  const drawAnswer = () => {
    const random = answers[Math.floor(Math.random() * answers.length)];
    setResult(random);
  };

  return (
    <div>
      <button onClick={drawAnswer}>Zadaj pytanie i kliknij</button>

      {result && (
        <div className="magic-ball-glow">
          <div className="magic-core">
            <p>{result}</p>
          </div>
        </div>
      )}
    </div>
  );
}
