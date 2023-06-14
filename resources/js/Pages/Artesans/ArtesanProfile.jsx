import {Link} from "@inertiajs/react";

export default function ArtesanProfile({artesan}) {
  console.log(artesan);
  const {name, city, state, reviews, contacts, images, locations} = artesan;
  const address = locations[0].address;
  const baseUrl = window.location.origin;
  const main_contact = contacts[0];

  return (
    <>
      <div className="bg-gray-200">
        <nav className="h-20 bg-gray-900 text-white flex flex-row">
          <div className="basis-1/4 flex">
            <Link href="/" className="text-3xl self-center ml-5">Artesan</Link>
          </div>
          <div className="basis-1/4">
          </div>

        </nav>

        {/* Main image */}
        <div id="profile_pic"
             className="h-225 w-225 top-10 mx-auto inset-x-0 relative rounded-2xl z-10 drop-shadow-2xl">
          <img src={images[5].url} alt="" className="rounded-2xl h-full w-full"/>
        </div>

        <div className="bg-white relative bottom-16 rounded-3xl h-650 flex flex-col items-center">

          <div className="text-3xl relative top-36 font-extrabold">{name}</div>

          {/* START Social Media icons */}
          <div className="flex relative top-44 gap-4">
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <a href="https://facebook.com">
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <a href="https://facebook.com">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <a href="https://facebook.com">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <a href="https://facebook.com">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          {/* END Social Media */}

          {/* START Artesan Information */}
          <div className="relative top-56 bg-gray-100 pb-5 w-10/12 rounded-2xl">
            <div className="mt-8 ml-6 mr-6 h-3/4">

              <div className="flex border-b border-gray-200 pb-5 shadow-sm">
                <div className="flex basis-1/4 h-auto items-center justify-start">
                  <div className="bg-white h-12 w-12 flex items-center justify-center rounded-lg shadow-xl">
                    <i className="fa-solid fa-mobile-screen-button fa-xl"></i>
                  </div>
                </div>
                <div className="basis-3/4 flex-col">
                  <div className="flex h-1/2 text-sm">Phone</div>
                  <div className="flex h-1/2">+1-{main_contact.phone_number}</div>
                </div>
              </div>

              <div className="flex border-b border-gray-200 pb-5 pt-5 shadow-sm">
                <div className="flex basis-1/4 h-auto items-center justify-start">
                  <div className="bg-white h-12 w-12 flex items-center justify-center rounded-lg shadow-xl">
                    <i className="fa-solid fa-earth-americas fa-xl"></i>
                  </div>
                </div>
                <div className="basis-3/4 flex-col">
                  <div className="flex h-1/2 text-sm">Location</div>
                  <div className="flex h-1/2">{city.name}, {state.name}</div>
                </div>
              </div>

              <div className="flex pb-5 pt-5">
                <div className="flex basis-1/4 h-auto items-center justify-start">
                  <div className="bg-white h-12 w-12 flex items-center justify-center rounded-lg shadow-xl">
                    <i className="fa-regular fa-paper-plane fa-xl"></i>
                  </div>
                </div>
                <div className="basis-3/4 flex-col">
                  <div className="flex h-1/2 text-sm">Email</div>
                  <div className="flex h-1/2">{main_contact.email}</div>
                </div>
              </div>

            </div>
          </div>
          {/* END Artesan Information */}

        </div>

        {/*Image Gallery*/}
        <div className="text-4xl font-bold flex justify-center relative bottom-8">Products</div>
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          {images && images.map((image, index) => (
            <img src={baseUrl + image.url} className="h-auto max-w-xs w-full rounded-lg p-1 shadow-lg" key={index}/>
          ))}
        </div>

      </div>
    </>
  )
}
