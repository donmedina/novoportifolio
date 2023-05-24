import Banner from './componentes/Banner'
import styles from './App.module.sass'
import LastProjects from 'componentes/LastProjects';
import Contato from 'componentes/Contato';
import Rodape from 'componentes/Rodape';

function App() {
  
  return (
    <div className="App">
        <Banner />
        <LastProjects />
        <Contato />
        <Rodape />
    </div>
  );
}

export default App;
