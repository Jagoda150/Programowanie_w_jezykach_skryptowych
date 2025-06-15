import SimpleButton from './SimpleButton';
import ProblemRender from './ProblemRender';
import FixedRender from './FixedRender';
import ProductList from './ProductList';
import './App.css';


function App() {
  return (
 <div className="App">
      <h2>Lab 9 – useCallback i referencje funkcji</h2>


      <SimpleButton />
      <hr />

      <ProblemRender />
      <hr />

      <FixedRender />
      <hr />

      <ProductList />
    </div>
  );
}

export default App;
