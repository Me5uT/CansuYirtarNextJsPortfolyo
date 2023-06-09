import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markericon from "../public/markericon.png";

// Persona Psikoloji Lat,Lng
const position = [41.054613, 28.987294];

const Map: React.FC = () => {
  const icon = L.icon({ iconUrl: markericon.toString(), iconSize: [25, 41] });
  return (
    <MapContainer
      center={position as LatLngExpression}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "300px", height: "200px" }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position as LatLngExpression} icon={icon}>
        <Popup>Persona Psikoloji</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
