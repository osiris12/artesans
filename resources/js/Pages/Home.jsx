import Map from "@/Components/Map";
import NewRegister from "@/Pages/Auth/NewRegister";

import {useLoadScript} from "@react-google-maps/api";

export default function Home({auth, locations}) {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyCDa6QBm2_sAunMD27rznV8y59LDSF1OUc',
  })

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Sign up/Sign in Form and Buttons */}
      <div className="mb-10">
        <NewRegister/>
      </div>

      {/* Map */}
      <Map locations={locations}/>

    </>
  )
}
