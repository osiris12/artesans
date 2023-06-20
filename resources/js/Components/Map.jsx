import {GoogleMap, Marker} from "@react-google-maps/api";
import {useMemo} from "react";

export default function Map({locations}) {
  const center = useMemo(() => ({
    lat: 21.883148,
    lng: -102.296260
  }), []);

  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
  }), [])


  return (
    <>
      {/*<div id="map" className="absolute h-3/6 w-full bottom-0 lg:right-0 lg:h-full lg:w-3/6"></div>*/}
      <GoogleMap zoom={5} center={center} options={options}
                 mapContainerClassName="absolute h-3/6 w-full bottom-0 lg:right-0 lg:h-full lg:w-3/6">
        {locations && locations.map((location, index) => {
          let lat = location.latitude;
          let lng = location.longitude;
          return (
            <Marker position={{lat: lat, lng: lng}} key={index}/>
          )
        })}

      </GoogleMap>
    </>
  )
}
