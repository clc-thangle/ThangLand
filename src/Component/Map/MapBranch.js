import React, { useState, useEffect } from "react";
import { db } from './../../firebaseConnect';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import './MapBranch.css'

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [geo, setGeo] = useState([]);
  
  useEffect(() => {
    let showGeo = [];   
    db.collection("geo").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          showGeo.push(doc.data());
        })
        setGeo(showGeo)
      })
  }, [])

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 16.072783606434253, lng: 108.22042419101558 }}
    >
      {geo.map(park => (
        <Marker
          key={park.id}
          position={{
            lat: park.lat,
            lng: park.lon
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.lat,
            lng: selectedPark.lon
          }}
        >
          <div className="container-info">

            <img className="img-map" src="https://www.highlandscoffee.com.vn/vnt_upload/dealer/02_2018/Highlands-Coffee-anh1.jpg" style={{ display: 'inline-block', width: '46px' }} />
            <div className="title" style={{ display: 'inline-block', marginLeft: '10px' }}>
              <h2 className="h2map">{selectedPark.title}</h2>
              <p>{selectedPark.address}</p>
            </div>

          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapBranch() {
  return (
    <div style={{ width: "98.9vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `90%`, marginLeft: '10%', marginRight:'10%', marginTop: '5%' }} />}
      />
    </div>
  );
}
