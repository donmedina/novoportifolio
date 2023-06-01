import styles from './App.module.sass'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from 'componentes/DefaultPage';
import Inicio from 'Paginas/Inicio';
import Posts from 'Paginas/Posts';
import NotFound from 'Paginas/NotFound';
import NavBar from 'componentes/NavBar';


function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />}></Route>
          </Route>
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className={styles.footer}>
          <h4>Site de portifolio criado com React e Sass - Copyright 2023</h4>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
