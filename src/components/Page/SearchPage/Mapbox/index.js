import React, { useState } from 'react';


import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapGL, { Marker, Popup, NavigationControl, FullscreenControl, FlyToInterpolator } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import PropTypes from 'prop-types';
import axios from 'axios';

// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
const MapBox = ({ submitSearchForm, longitude, latitude, userSearchInput }) => {
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

  const [searchResultLayer, setSearchResultLayer] = useState(null);

  const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
  };

  const mapRef = React.createRef();

  const handleGeocoderViewportChange = (viewPort) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return setViewport({
      ...viewPort,
      ...geocoderDefaultOverrides,
    });
  };

  const handleOnResult = (event) => {
    console.log(event.result);
    setSearchResultLayer(
      new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    );
  };


  const newCoordonates = (latitude, longitude) => {
    setViewport({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({speed: 2}),
      transitionDuration: 'auto',
    });
  }

  const handleSubmit = (event) => {
    // annule l'action par défaut du formulaire
    event.preventDefault();
    // execution d'une action en vue de faire une requete à l'api symfony
    submitSearchForm();

    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userSearchInput}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1572704013602&autocomplete=false&country=fr&types=place&limit=1`)
      .then((response) => {
        console.log('INFORMATIONS SUR LA VILLE : ', response.data.features[0].center);
        const latitude = response.data.features[0].center[1];
        const longitude = response.data.features[0].center[0];
        newCoordonates(latitude, longitude)
        
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  };

  

  return (
    <>
      <MapGL
        mapRef={mapRef}
        {...viewport}
        mapStyle={style}
        onViewportChange={(viewPort) => setViewport({ ...viewPort })}
        mapboxApiAccessToken="pk.eyJ1IjoiamVhbi1jaHJpc3RvcGhlOTciLCJhIjoiY2syMXNwNmRtMDI5NDNkcGdtMDltcGdyNCJ9.dcfrdvAqRv1MshVt4ijgng"
      >
        {/* <Geocoder
          mapRef={mapRef}
          onResult={handleOnResult}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiamVhbi1jaHJpc3RvcGhlOTciLCJhIjoiY2syMXNwNmRtMDI5NDNkcGdtMDltcGdyNCJ9.dcfrdvAqRv1MshVt4ijgng"
          position="top-left"
        />
        <DeckGL {...viewport} layers={[searchResultLayer]} /> */}
        <button type="button" onClick={handleSubmit}>RECHERCHER</button>
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
