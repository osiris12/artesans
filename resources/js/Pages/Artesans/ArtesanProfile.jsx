export default function ArtesanProfile({artesan}) {
  const {name, origins, locations: location} = artesan;

  return (
    <>
      {location.map(function (t) {
        console.log(t.address);
      })}
      <pre>{JSON.stringify(artesan, null, 2)}</pre>

    </>
  )
}
