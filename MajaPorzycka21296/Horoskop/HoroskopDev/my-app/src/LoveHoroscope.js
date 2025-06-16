import { useState } from 'react';

const zodiac = [
  "Baran", "Byk", "Bliźnięta", "Rak", "Lew", "Panna",
  "Waga", "Skorpion", "Strzelec", "Koziorożec", "Wodnik", "Ryby"
];

export default function LoveHoroscope() {
  const [z1, setZ1] = useState('');
  const [z2, setZ2] = useState('');
  const [match, setMatch] = useState('');

  const check = () => {
    if (z1 === z2) setMatch("Idealna para – jedno serce!");
    else if ((z1 === "Rak" && z2 === "Skorpion") || (z1 === "Lew" && z2 === "Waga"))
      setMatch("Silne przyciąganie!");
    else setMatch("Relacja może być burzliwa, ale namiętna.");
  };

  return (
    <div>
      <select onChange={(e) => setZ1(e.target.value)} defaultValue="">
        <option value="">Znak 1</option>
        {zodiac.map(z => <option key={z}>{z}</option>)}
      </select>
      <select onChange={(e) => setZ2(e.target.value)} defaultValue="">
        <option value="">Znak 2</option>
        {zodiac.map(z => <option key={z}>{z}</option>)}
      </select>
      <br />
      <button onClick={check}>Sprawdź dopasowanie</button>
      {match && (
  <div className="love-result-container">
    <div className="card">
      <p><strong>{z1} + {z2}</strong></p>
      <h3>{match}</h3>
    </div>
  </div>
)}

    </div>
  );
}
