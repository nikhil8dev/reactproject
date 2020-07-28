import React, { useState, useRef, useCallback } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

export default function Map(props) {
  const mapRef = useRef(null);
  const [position, setPosition] = useState({
    lat: 18.520760,
    lng: 73.855408
  });

  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenterChanged() {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  return (
    <GoogleMap
      onLoad={handleLoad}
      onCenterChanged={handleCenterChanged}
      zoom={props.zoom}
      center={props.center}
      id="map"
    >
      <Marker position={position} />
    </GoogleMap>
  );
}



