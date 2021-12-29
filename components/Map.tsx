import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Map = () => {
  const pinIcon = new Icon({
    iconUrl: 'map-marker.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });

  return (
    <MapContainer center={[60.4515, 22.267]} zoom={13} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[60.45964, 22.279435]} icon={pinIcon}>
        <Popup>Vincit</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
