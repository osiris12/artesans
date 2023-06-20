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
      <div
        className="max-w-screen-xl m-0 bg-white shadow sm:rounded-lg flex justify-center items-center h-2/6 lg:justify-normal">
        <NewRegister/>
        <Map locations={locations}/>
      </div>
    </>

  )
}
