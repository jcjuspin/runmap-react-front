import React, { useState, useRef } from 'react';


// import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import PropTypes from 'prop-types';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PlacePin from './PlacePin';

// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
const MapBox = ({ submitSearchForm, userSearchInput }) => {
  // TODO: lors de la requete la réponse que j'obtiens c'est d'abord la longitude puis latitude
  // du coup je dois faire une requete vers l'api pour une ville pour avoir ces coordonnées.
  // je dois injecter sur la map les coordonées de tous les places présents dans la bdd sous forme de marqueur

  const [viewport, setViewport] = useState({
    width: 'auto',
    height: '100vh',
    latitude: 48.98806,
    longitude: 2.23056,
    zoom: 5,
    //bearing:0,
    //pitch:0,
  })

  const [style, setStyle] = useState('mapbox://styles/jean-christophe97/ck2gcjj6t0x3v1cqq0228w5v3');


  const mapRef = React.createRef();

  const newCoordonates = (latitude, longitude) => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator({speed: 2}),
      // transitionDuration: 'auto',
    });
  }

  const handleSubmit = (event) => {
    // annule l'action par défaut du formulaire
    event.preventDefault();
    // execution d'une action en vue de faire une requete à l'api symfony
    submitSearchForm();

    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userSearchInput}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1572704013602&autocomplete=false&country=fr&types=place&limit=1`)
      .then((response) => {
        const cityLatitude = response.data.features[0].center[1];
        const cityLongitude = response.data.features[0].center[0];
        newCoordonates(cityLatitude, cityLongitude);
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  // TODO: 
  // 1. récuperer toutes les places.
  // 2. modifier le contenu avec map() pour avoir pour chaque place la longitude et la lattitude grace au nom de la rue et la ville.
  // 3. faire un forEach pour chaque marqueur en injectant la longitude et la lattitude
  // 4 injecter dans le overlay les infos de surface au sujet du stade
  // 5 quand on double click sur le marqueur ou le overlay, on affiche une modale avec les détails du lieu
  return (
    <>
      <MapGL
        mapRef={mapRef}
        {...viewport}
        mapStyle={style}
        onViewportChange={(viewPort) => setViewport({ ...viewPort })}
        mapboxApiAccessToken="pk.eyJ1IjoiamVhbi1jaHJpc3RvcGhlOTciLCJhIjoiY2syMXNwNmRtMDI5NDNkcGdtMDltcGdyNCJ9.dcfrdvAqRv1MshVt4ijgng"
      >
        <button type="button" onClick={handleSubmit}>RECHERCHER</button>
        <Marker
          latitude={48.98806}
          longitude={2.23056}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <img
              src="../assets/yellowmarker.png"
              alt="marker"
            />
          </OverlayTrigger>
        </Marker>

      </MapGL>
    </>
  );
};

MapBox.propTypes = {

};

MapBox.defaultProps = {

};


export default MapBox;


// == Export
// export default AutoComplete;
