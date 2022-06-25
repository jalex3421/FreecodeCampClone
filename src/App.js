import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Some Tech Youtubers that i admire :)</h1>
        <Testimonio 
          nombre='Joma Tech'
          imagen='joma'
          cargo='Ex Google engineer' 
          testimonio='I think that word is the best IDE outhere ^^' />
        <Testimonio 
          nombre='Mayuko'
          imagen='mayuko'
          cargo='Freelancer' 
          testimonio='Silicon valley is overrated' />
        <Testimonio 
          nombre='Jedcal'
          imagen='jedcal'
          cargo='Vlogger & Frontend developer' 
          testimonio='Live your own life is the most important thing!' />
      </div>
    </div>
  );
}

export default App;
