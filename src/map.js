import React, { useState } from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  Popup,
  Marker
} from "react-map-gl";
import { Icon } from "semantic-ui-react";
export default function Map(props) {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 29.8649376,
    longitude: 77.8965307,
    zoom: 14
  });
  const { doctors } = props;
  return (
    <ReactMapGL
      {...viewport}
      {...props}
      onViewportChange={setViewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoidnJhanB1dDQwIiwiYSI6ImNrNjQ4M2NwcTBlM3MzbHBhNXNwd3FwdTMifQ.hz0-6-pa5K_QvWSVtAO_jA"
      }
    >
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserLocation
      />
      <div style={{ position: "absolute", right: 0 }}>
        <NavigationControl showCompass showZoom />
      </div>
      {doctors.map(doctor => (
        <Marker
          latitude={Number(doctor.latitude)}
          longitude={Number(doctor.longitude)}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Icon name={"map pin"} />
          <div
            style={{ fontSize: "15px", marginLeft: "-30px", color: "#d01919" }}
          >
            {doctor.name}
          </div>
        </Marker>
      ))}
    </ReactMapGL>
  );
}
