import Banner from './componentes/Banner'
import styles from './App.module.sass'
import LastProjects from 'componentes/LastProjects';
import Contato from 'componentes/Contato';


function App() {
  
  return (
    <div className={styles.app}>
        <Banner />
        <LastProjects />
        <Contato />

        <div className={styles.footer}>
          <h4>Site de portifolio criado com React e Sass - Copyright 2023</h4>
        </div>
    </div>
  );
}

export default App;
