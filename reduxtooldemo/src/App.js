import { useSelector } from 'react-redux';
import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import Theme from './features/theme/Theme';

function App() {

  const bgColor = useSelector((state) => state.theme.bgColor);

  return (
    <div className="App" style={{background : bgColor}}>
      <Counter />
      <br />
      <Coin />
      <br />
      <Theme />
    </div>
  );
}

export default App;
