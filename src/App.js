import logo from './logo.svg';
import './App.css';
import Webindex from './component/sensiro/Webindex';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
       <Webindex />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
