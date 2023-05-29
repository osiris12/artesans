export default function Map() {
  const key = 'QGB1S3ZIxoX0p4Oyygve';
  const source = new ol.source.TileJSON({
    url: `https://api.maptiler.com/maps/outdoor-v2/tiles.json?key=${key}`,
    tileSize: 512,
    crossOrigin: 'anonymous'
  });

  const map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: source
      })
    ],
    target: 'map',
    view: new ol.View({
      constrainResolution: true,
      center: ol.proj.fromLonLat([-102.291854, 21.918648]),
      zoom: 5.1
    })
  });

  const layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([-102.2914, 21.9148])),
        })
      ]
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        crossOrigin: 'anonymous',
        src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
      })
    })
  });

  const Airports = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'http://artesans.local/api/locations',
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        crossOrigin: 'anonymous',
        src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
      })
    })
  });
  map.addLayer(layer);
  map.addLayer(Airports);

  return (
    <>
      <div id="map" className="absolute h-3/6 w-full bottom-0 lg:right-0 lg:h-full lg:w-3/6"></div>
    </>
  )
}

