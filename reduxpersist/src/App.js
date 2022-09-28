import './App.css';
import Counter from './component/Counter';
import OnlineOfline from './component/OnlineOfline';

function App() {
  return (
    <div className="App">
     <Counter />
     <br/>
     <h2>Other Task</h2>
     <OnlineOfline />
    </div>
  );
}

export default App;
