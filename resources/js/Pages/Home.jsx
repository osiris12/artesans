import Map from "@/Components/Map";
import {Link} from "@inertiajs/react";
import Register from "@/Pages/Auth/Register";
import NewRegister from "@/Pages/Auth/NewRegister";

export default function Home({auth}) {

  return (
    <>
      <div
        className="max-w-screen-xl m-0 bg-white shadow sm:rounded-lg flex justify-center items-center h-2/6 lg:justify-normal">
        <NewRegister/>
        <Map/>
      </div>
    </>

  )
}
