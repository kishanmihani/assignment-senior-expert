// import logo from './logo.svg';
import './App.css';
// import Webindex from './component/sensiro/Webindex';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import TaskList from './component/TaskList/TaskList';
function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
       <TaskList />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
