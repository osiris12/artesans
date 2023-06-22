import {GoogleMap, InfoWindow, Marker} from "@react-google-maps/api";
import {useMemo, useState} from "react";
import {Link} from "@inertiajs/react";

export default function Map({locations}) {
  const center = useMemo(() => ({
    lat: 21.883148,
    lng: -102.296260
  }), []);

  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
  }), [])

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleInfoWindowClose = () => {
    setSelectedLocation(null);
  };


  return (
    <>
      <div className="relative h-750">
        <GoogleMap
          zoom={5}
          center={center}
          options={options}
          mapContainerClassName="absolute h-full w-full bottom-0 lg:right-0 lg:h-full lg:w-3/6"
        >
          {locations && locations.map((location, index) => {
            let lat = location.latitude;
            let lng = location.longitude;
            return (
              <Marker
                position={{lat: lat, lng: lng}}
                key={index} clickable={true}
                onClick={() => handleMarkerClick(location)}
              >
                {selectedLocation && selectedLocation === location && (
                  <InfoWindow onCloseClick={handleInfoWindowClose}>
                    <div>
                      <Link href={"/artesans/1"}>Address: {location.address}</Link>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
        </GoogleMap>
      </div>
    </>
  )
}
