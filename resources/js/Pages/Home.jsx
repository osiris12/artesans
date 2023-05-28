
export default function Home({artesans}) {

    return (
        <>
            <h1 className="text-6xl">Artesans</h1>
            <div className="container grid grid-cols-4 gap-4">
                {artesans.map((artesan) => (
                    <h1>{artesan.name}</h1>
                ))}
            </div>

        </>
    )
}
