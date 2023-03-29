import React from 'react';
import {Map, TileLayer } from "react-leaflet";


const BasicMap = () => {
    const [center, setCenter] = useState ({lat: 13.0846, lng: 80,248357});
    const ZOOM_LEVEL =9; 
}


function OurFootPrint() {
  return (
    <><Map   
      center={center}
      zoom={ZOOM_LEVEL}>
        <TileLayer url='https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=THoCgqDtmgnrchsi822d' attribution='https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=THoCgqDtmgnrchsi822d'/>

        </Map>

    <div>OurFootPrint</div>
    </>
  )
}

export default OurFootPrint;



