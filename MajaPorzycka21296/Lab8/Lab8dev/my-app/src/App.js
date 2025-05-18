import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div>
      <h1>Lab 8</h1>

      <h2>Ćwiczenie 1 – Warunkowe renderowanie</h2>
      <ToggleDetails />

      <h2>Ćwiczenie 2 – Wyświetlanie w zależności od punktów</h2>
      <ScoreDisplay score={45} />
      <ScoreDisplay score={65} />
      <ScoreDisplay score={90} />

      <h2>Ćwiczenie 3 – Lista z filtrowaniem</h2>
      <TaskList />

      <h2>Ćwiczenie 4 – useEffect + API</h2>
      <UserList />

      <h2>Ćwiczenie 5 – Licznik z efektem ubocznym</h2>
      <TimerCounter />
    </div>
  );
}

export default App;
