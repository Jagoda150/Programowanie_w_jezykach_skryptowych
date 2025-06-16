import './App.css';
import DailyHoroscope from './DailyHoroscope';
import MagicBall from './MagicBall.js';
import Tarot from './Tarot';
import LoveHoroscope from './LoveHoroscope';

function App() {
  const backgroundStyle = {
    backgroundImage: "url('/tlo.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: '#eee',
    textAlign: 'center',
  };
return (
  <div style={backgroundStyle}>
    <div className="App">
      <header className="app-header">
        <h1 className="magic-title">Horoskopowa Moc</h1>

        <p>✨Witaj w miejscu, gdzie los mówi sam za siebie ✨</p>
      </header>

     <div className="app-section fade-in">
  <h2>Horoskop dzienny</h2>
  <DailyHoroscope />
</div>

<div className="app-section fade-in">
  <h2>Kula mocy</h2>
  <MagicBall />
</div>

<div className="app-section fade-in">
  <h2>Tarot</h2>
  <Tarot />
</div>

<div className="app-section fade-in">
  <h2>Horoskop miłosny</h2>
  <LoveHoroscope />
</div>

<footer className="footer-fade">
  <p>zrobione przez Jagoda150</p>
</footer>
    </div>
  </div>

  
);
}



export default App;
