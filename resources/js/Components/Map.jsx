import {GoogleMap, InfoWindow, Marker, MarkerClusterer} from "@react-google-maps/api";
import {useMemo, useState} from "react";
import {Link} from "@inertiajs/react";

export default function Map({locations}) {
  const center = useMemo(() => ({
    lat: 6.083148,
    lng: -101.296260,
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

  function createKey(location) {
    return location.lat + location.lng
  }


  return (
    <>
      <div className="relative h-750">
        <GoogleMap
          zoom={4.2}
          center={center}
          options={options}
          mapContainerClassName="absolute h-full w-full bottom-0 lg:right-0 lg:h-full lg:w-3/6"
        >
          <MarkerClusterer>
            {(clusterer) =>
              locations.map((location, index) => (
                <Marker
                  position={{lat: location.latitude, lng: location.longitude}}
                  key={index}
                  clickable={true}
                  onClick={() => handleMarkerClick(location)}
                  clusterer={clusterer}
                >
                  {selectedLocation && selectedLocation === location && (
                    <InfoWindow onCloseClick={handleInfoWindowClose}>
                      <div>
                        <Link href={"/artesans/1"}>Address: {location.address}</Link>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </div>
    </>
  )
}
