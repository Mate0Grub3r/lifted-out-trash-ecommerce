import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
        
        <div className="banner-box container-fluid">
          <img src="/assets/images/banner.webp" alt="banner" />
        </div>
      </header>
      
      <ItemListContainer greeting="Welcome to Lifted Out Trash™" />

      <footer>
        <div className="footer-background">
          <h2 className="logo-footer">Lifted Out Trash™</h2>
          <p className="derechos">
            Lifted Out Trash &copy; Todos los derechos reservados
          </p>
          <div className="box-nav-footer">
            <a href="#remeras">Remeras</a>
            <a href="#baggys">Baggys</a>
            <a href="#hoodies">Hoodies</a>
            <a href="#ziphoodies">Zip-Hoodies</a>
          </div>
          <div className="box-information">
            <p>Email: Liftedoutrash@gmail.com</p>
            <p>Telephone: +54 11 7859-2857</p>
            <p>Direction: Buenos Aires, San Miguel, Argentina.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
