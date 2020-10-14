import React from "react";
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import mapMarkertImg from "../images/map-marker.svg";

import "../styles/pages/orphanagesMap.css";
import "leaflet/dist/leaflet.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkertImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estãoesperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Palhoça</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-27.6772525,-48.709114]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="fff" />
      </Link>
    </div>
  );
}
export default OrphanagesMap;