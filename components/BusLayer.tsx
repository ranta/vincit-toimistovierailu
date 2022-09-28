import { useEffect, useState } from 'react';
import { Icon } from 'leaflet';
import { Marker } from 'react-leaflet';

interface Bus {
  id: string;
  latitude: number;
  longitude: number;
  monitored: boolean;
}

interface Vehicles {
  [id: string]: Omit<Bus, 'id'> & { id?: string };
}

export const BusLayer = () => {
  const [busData, setBusData] = useState<Bus[]>([]);

  useEffect(() => {
    async function fetchBusData() {
      const res = await fetch('http://data.foli.fi/siri/vm');
      const data = await res.json();
      const vehicles: Vehicles = data.result.vehicles;

      const busDataList = Object.entries(vehicles).map(([id, bus]) => ({ id, ...bus }));
      setBusData(busDataList.filter((bus) => bus.monitored));
    }

    const interval = setInterval(() => {
      fetchBusData();
    }, 3000);

    return () => clearInterval(interval);
  });

  const pinIcon = new Icon({
    iconUrl: 'map-marker.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });

  return (
    <>
      {busData.map((bus) => (
        <Marker key={bus.id} position={[bus.latitude, bus.longitude]} icon={pinIcon} />
      ))}
    </>
  );
};
