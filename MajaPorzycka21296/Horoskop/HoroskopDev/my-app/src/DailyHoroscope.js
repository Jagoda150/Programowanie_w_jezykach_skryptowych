import { useState } from 'react';
import zodiac from './zodiacData';

export default function Horoscope() {
  const [selected, setSelected] = useState('');
  const [message, setMessage] = useState('');

  const generateHoroscope = () => {
    const options = [
      "To będzie Twój dzień!",
      "Uważaj dziś na niespodzianki.",
      "Otwórz się na nowe możliwości.",
      "Dobry dzień na odpoczynek.",
      "Ktoś Cię dziś pozytywnie zaskoczy.",
      "Nie podejmuj pochopnych decyzji.",
      "Uśmiech przyniesie Ci szczęście."
    ];
    const random = options[Math.floor(Math.random() * options.length)];
    setMessage(random);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    generateHoroscope();
  };

  return (
    <div>
      <select onChange={handleChange} value={selected}>
        <option value="">Wybierz swój znak zodiaku</option>
        {zodiac.map((z) => (
          <option key={z} value={z}>{z}</option>
        ))}
      </select>
      {selected && (
  <div className="horoscope-container">
    <div className="card">
      <h2>{selected}</h2>
      <p>{message}</p>
    </div>
  </div>
)}
    </div>
  );
}
