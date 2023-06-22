import {Link} from "@inertiajs/react";

export default function ArtesanProfile({artesan}) {
  console.log(artesan);
  const {name, city, state, reviews, contacts, images, locations} = artesan;
  const address = locations[0].address;
  const baseUrl = window.location.origin;
  const main_contact = contacts[0];

  return (
    <>
      <div className="bg-gray-100">
        <nav className="h-20 bg-white flex flex-col justify-center items-center">
          <div className="mt-3">
            <Link href="/" className="text-3xl text-green-800">Artesans</Link>
          </div>
          <div className="basis-1/4">
          </div>

        </nav>

        <div className="h-200 mx-auto inset-x-0 rounded-2xl drop-shadow-2xl"></div>

        {/* START Artesan information */}
        <div className="bg-white relative rounded-3xl h-full flex flex-col items-center">

          {/* Main image */}
          <div id="profile_pic"
               className="h-225 w-225 mx-auto inset-x-0 rounded-2xl drop-shadow-2xl absolute z-50"
          >
            <img src={images[5].url} alt="" className="rounded-2xl h-full w-full relative bottom-40"/>
          </div>

          {/* START Main Information */}
          <div className="w-full bg-white relative mt-24 pb-16 rounded-3xl flex flex-col items-center">
            <div className="text-3xl font-extrabold text-green-800">{name}</div>
            {/* START Social Media icons */}
            <div className="flex gap-4 mt-5">
              <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook text-xl text-indigo-500"></i>
                </a>
              </div>
              <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <a href="https://facebook.com">
                  <i className="fab fa-instagram text-xl text-indigo-500"></i>
                </a>
              </div>
              <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <a href="https://facebook.com">
                  <i className="fab fa-twitter text-xl text-indigo-500"></i>
                </a>
              </div>
              <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <a href="https://facebook.com">
                  <i className="fab fa-linkedin text-xl text-indigo-500"></i>
                </a>
              </div>
            </div>
            {/* END Social Media */}

            {/* START Biography */}
            <div className="flex flex-col items-center text-green-950 pl-12 pr-12 pt-6 pb-5">
              <div className="text-2xl pb-4">Artesan Bio</div>
              <p className="text-sm text-center tracking-wide leading-relaxed line-clamp-6 hover:line-clamp-none">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            {/* END Biography */}

            {/* START Contact Information */}
            <div className="bg-gray-100 pb-5 w-10/12 rounded-2xl mt-5">
              <div className="mt-8 ml-6 mr-6 h-3/4">
                <div className="flex border-b border-gray-200 pb-5 shadow-sm">
                  <div className="flex basis-1/4 h-auto items-center justify-start">
                    <div className="bg-white h-12 w-12 flex items-center justify-center rounded-lg shadow-xl">
                      <i className="fa-solid fa-mobile-screen-button fa-xl text-indigo-500"></i>
                    </div>
                  </div>
                  <div className="basis-3/4 flex-col text-green-950">
                    <div className="flex h-1/2 text-sm ">Phone</div>
                    <div className="flex h-1/2">+1-{main_contact.phone_number}</div>
                  </div>
                </div>

                <div className="flex border-b border-gray-200 pb-5 pt-5 shadow-sm">
                  <div className="flex basis-1/4 h-auto items-center justify-start">
                    <div className="bg-white h-12 w-12 flex items-center justify-center rounded-lg shadow-xl">
                      <i className="fa-solid fa-earth-americas fa-xl text-indigo-500"></i>
                    </div>
                  </div>
                  <div className="basis-3/4 flex-col text-green-950">
                    <div className="flex h-1/2 text-sm">Location</div>
                    <div className="flex h-1/2">{city.name}, {state.name}</div>
                  </div>
                </div>

                <div className="flex pb-5 pt-5">
                  <div className="flex basis-1/4 h-auto items-center justify-start">
                    <div className="bg-white h-12 w-12 flex items-center justify-center rounded-lg shadow-xl">
                      <i className="fa-regular fa-paper-plane fa-xl text-indigo-500"></i>
                    </div>
                  </div>
                  <div className="basis-3/4 flex-col text-green-950">
                    <div className="flex h-1/2 text-sm">Email</div>
                    <div className="flex h-1/2">{main_contact.email}</div>
                  </div>
                </div>

              </div>
            </div>
            {/* END Contact Information */}
          </div>
          {/* END Main Information */}

        </div>
        {/* END Artesan Information */}

        {/*Image Gallery*/}
        <div className="text-4xl font-bold flex justify-center relative text-green-800">Products</div>
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          {images && images.map((image, index) => (
            <img src={baseUrl + image.url} className="h-auto max-w-xs w-full rounded-lg p-1 shadow-lg" key={index}/>
          ))}
        </div>

      </div>
    </>
  )
}
