import './App.css';
import { BrowserRouter} from "react-router-dom"
import { Rutas } from './Routes/Rutas';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Rutas />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
