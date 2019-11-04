import React from 'react';

import './businessPage.scss';

const BusinessPage = () => (

  <>

    <div className="business-header">
      <div className="container container-business-header">
        <div className="header-business-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, in! Fugit, minima magnam quod optio repellat obcaecati unde sint laborum!</p>
        </div>
      </div>
    </div>

    <div className="container business-motivation">
      <div className="motivation-content">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid iste nisi facilis? Neque molestias, omnis cupiditate voluptas cumque voluptates quidem quia consequatur excepturi, velit, dicta harum laboriosam. Expedita eveniet tempore illum ipsam temporibus saepe non officia. Deleniti, mollitia hic.</p>
      </div>
    </div>

    <div className="container business-counter">
      <div className="row counter-content">
        <div className="col-sm col-counter">
          <div className="counter-number">10</div>
          <div className="counter-descript">Membres</div>
        </div>
        <div className="col-sm col-counter col-counter-devider ">
          <div className="counter-number">20</div>
          <div className="counter-descript">Villes</div>
        </div>
        <div className="col-sm col-counter">
          <div className="counter-number">30</div>
          <div className="counter-descript">Lieux référencé</div>
        </div>
        
      </div>
    </div>

  </>

);

export default BusinessPage;