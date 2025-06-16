import { useState } from 'react';

const cards = [
  { name: "Głupiec", file: "glupiec.jpg" },
  { name: "Mag", file: "mag.jpg" },
  { name: "Kapłanka", file: "kaplanka.jpg" },
  { name: "Cesarzowa", file: "cesarzowa.jpg" },
  { name: "Wieża", file: "wieza.jpg" },
  { name: "Kochankowie", file: "kochankowie.jpg" },
  { name: "Śmierć", file: "smierc.jpg" },
  { name: "Słońce", file: "slonce.jpg" }
];

export default function Tarot() {
  const [card, setCard] = useState(null);

  const drawCard = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setCard(randomCard);
  };

  return (
    <div>
      <button onClick={drawCard}>Wylosuj kartę tarota</button>
      {card && (
        <div className="tarot-output">
          <div className="card">
            <h3>{card.name}</h3>
            <img
              src={`/tarot/${card.file}`}
              alt={card.name}
              style={{ width: '150px', marginTop: '1rem', borderRadius: '10px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
