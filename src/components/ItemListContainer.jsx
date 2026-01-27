import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <main>
      <div className="welcome-box">
        <h1 className="welcome-text">{greeting}</h1>
      </div>

      {/* SECTION REMERAS */}
      <div className="remeras-texto-box" id="remeras">
        <p>Remeras</p>
      </div>
      <section className="box-remeras">
        <div className="remera1-box">
          <img
            src="/assets/images/remera1.webp"
            alt="Remera 1"
            className="remera1"
          />
          <h2>Island Boxy Tee</h2>
          <p>$20.00</p>
        </div>
        <div className="remera1-box">
          <img
            src="/assets/images/remera2.webp"
            alt="Remera 2"
            className="remera1 container-fluid"
          />
          <h2>Parasomnia Boxy Tee</h2>
          <p>$25.00</p>
        </div>
        <div className="remera1-box">
          <img
            src="/assets/images/remera3.webp"
            alt="Remera 3"
            className="remera1"
          />
          <h2>Falling Oversize Tee</h2>
          <p>$25.00</p>
        </div>
        <div className="remera1-box">
          <img
            src="/assets/images/remera4.webp"
            alt="Remera 4"
            className="remera1"
          />
          <h2>New Order Boxy Tee</h2>
          <p>$30.00</p>
        </div>
      </section>

      {/* SECTION BAGGYS */}
      <div className="baggys-texto-box" id="baggys">
        <p>Baggy Pants</p>
      </div>
      <section className="box-baggys">
        <div className="baggy1-box">
          <img src="/assets/images/baggy1.webp" alt="Baggy 1" className="baggys" />
          <h2>Baggy "Pant Black"</h2>
          <p>$35.00</p>
        </div>
        <div className="baggy1-box">
          <img src="/assets/images/baggy2.webp" alt="Baggy 2" className="baggys" />
          <h2>Baggy Pant "Ycammo"</h2>
          <p>$40.00</p>
        </div>
        <div className="baggy1-box">
          <img src="/assets/images/baggy3.jpg" alt="Baggy 3" className="baggys" />
          <h2>Baggy Jean "Oxidate"</h2>
          <p>$45.00</p>
        </div>
        <div className="baggy1-box">
          <img src="/assets/images/baggy4.jpg" alt="Baggy 4" className="baggys" />
          <h2>Baggy Jean "Red Heart"</h2>
          <p>$35.00</p>
        </div>
      </section>

      {/* SECTION HOODIES */}
      <div className="hoodies-texto-box" id="hoodies">
        <p>Hoodies</p>
      </div>
      <section className="box-hoodies">
        <div className="hoodies-box">
          <img
            src="/assets/images/hoodie1.webp"
            alt="hoodie 1"
            className="hoodies"
          />
          <h2>Hoodie Oversize "Destroy"</h2>
          <p>$40.00</p>
        </div>
        <div className="hoodies-box">
          <img
            src="/assets/images/hoodie2.webp"
            alt="hoodie 2"
            className="hoodies"
          />
          <h2>Hoodie Oversize "Art"</h2>
          <p>$35.00</p>
        </div>
        <div className="hoodies-box">
          <img
            src="/assets/images/hoodie3.webp"
            alt="hoodie 3"
            className="hoodies"
          />
          <h2>Hoodie Oversize "Love"</h2>
          <p>$45.00</p>
        </div>
        <div className="hoodies-box">
          <img
            src="/assets/images/hoodie4.webp"
            alt="hoodie 4"
            className="hoodies"
          />
          <h2>Hoodie Oversize "Reding"</h2>
          <p>$40.00</p>
        </div>
      </section>

      {/* SECTION ZIP-HOODIES */}
      <div className="zip-hoodies-texto-box" id="ziphoodies">
        <p>Zip-Hoodies</p>
      </div>
      <section className="box-zip-hoodies">
        <div className="zip-hoodies-box">
          <img
            src="/assets/images/zip-hoodie1.webp"
            alt="zip-hoodie 1"
            className="zip-hoodies"
          />
          <h2>zip-Hoodie Oversize "Order"</h2>
          <p>$40.00</p>
        </div>
        <div className="zip-hoodies-box">
          <img
            src="/assets/images/zip-hoodie2.webp"
            alt="zip-hoodie 2"
            className="zip-hoodies"
          />
          <h2>zip-Hoodie Oversize "Visual"</h2>
          <p>$35.00</p>
        </div>
        <div className="zip-hoodies-box">
          <img
            src="/assets/images/zip-hoodie3.webp"
            alt="zip-hoodie 3"
            className="zip-hoodies"
          />
          <h2>zip-Hoodie Oversize "Cammo"</h2>
          <p>$45.00</p>
        </div>
      </section>
    </main>
  );
};

export default ItemListContainer;
