import './App.css';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator.js';
import FormReducer from './FormReducer';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutEffectExample from './LayoutEffectExample';

function App() {
  return (
    <div className="App">
      <h2>Lab 10</h2>

      <ClickCounter />
      <hr />

      <PrimeCalculator />
      <hr />

      <FormReducer />
      <hr />

      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <hr />

      <LayoutEffectExample />
    </div>
  );
}

export default App;
