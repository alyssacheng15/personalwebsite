import { useState, useCallback, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GEO_URL = '/world-110m.json'

const PLACES = [
  { name: 'San Francisco', country: 'USA',      coords: [-122.4194, 37.7749], photos: [] },
  { name: 'Los Angeles',   country: 'USA',      coords: [-118.2437, 34.0522], photos: [] },
  { name: 'Hawaii',        country: 'USA',      coords: [-155.5828, 19.8968], photos: [] },
  { name: 'New York City', country: 'USA',      coords: [-74.006,   40.7128], photos: [] },
  { name: 'Vancouver',     country: 'Canada',   coords: [-123.1216, 49.2827], photos: [] },
  { name: 'Yellowknife',  country: 'Canada',   coords: [-114.3718, 62.4540], photos: [] },
  { name: 'Mexico City',   country: 'Mexico',   coords: [-99.1332,  19.4326], photos: [] },
  { name: 'Cabo San Lucas',country: 'Mexico',   coords: [-109.9167, 22.8905], photos: [] },
  { name: 'Lisbon',        country: 'Portugal', coords: [-9.1393,   38.7223], photos: [] },
  { name: 'Copenhagen',    country: 'Denmark',  coords: [12.5683,   55.6761], photos: [] },
  { name: 'Malmö',         country: 'Sweden',   coords: [13.0358,   55.6050], photos: [] },
  { name: 'Munich',        country: 'Germany',  coords: [11.5820,   48.1351], photos: [] },
  { name: 'Vienna',        country: 'Austria',  coords: [16.3738,   48.2082], photos: [] },
  { name: 'Bratislava',    country: 'Slovakia', coords: [17.1077,   48.1486], photos: [] },
  { name: 'Budapest',      country: 'Hungary',  coords: [19.0402,   47.4979], photos: [] },
  { name: 'Bangkok',       country: 'Thailand', coords: [100.5018,  13.7563], photos: [] },
  { name: 'Tokyo',         country: 'Japan',    coords: [139.6917,  35.6895], photos: [] },
  { name: 'Taipei',        country: 'Taiwan',   coords: [121.5654,  25.0330], photos: [] },
]

function Slideshow({ photos, name }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setIdx(0)
    if (photos.length < 2) return
    const t = setInterval(() => setIdx(i => (i + 1) % photos.length), 2000)
    return () => clearInterval(t)
  }, [photos])

  if (photos.length === 0) {
    return (
      <div className="popup-placeholder">
        <span>📷</span>
        <p>photos coming soon</p>
      </div>
    )
  }

  return (
    <div className="popup-slideshow">
      <img src={photos[idx]} alt={`${name} ${idx + 1}`} />
      {photos.length > 1 && (
        <div className="popup-dots">
          {photos.map((_, i) => (
            <span key={i} className={`popup-dot${i === idx ? ' active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Gallery ── */
// w = total card width (px), imgH = photo area height (px)
const SIZES = {
  'p-xs':  { w: 122, imgH: 140 },
  'p-sm':  { w: 142, imgH: 168 },
  'p-md':  { w: 162, imgH: 196 },
  'p-lg':  { w: 182, imgH: 224 },
  'l-sm':  { w: 188, imgH: 108 },
  'l-md':  { w: 218, imgH: 128 },
  'l-lg':  { w: 250, imgH: 150 },
  'sq':    { w: 152, imgH: 152 },
}

const ROW_1 = [
  { city: 'Tokyo',      country: 'Japan',    photo: '/images/alyssa2.jpeg', size: 'p-sm',  rot: -4  },
  { city: 'Lisbon',     country: 'Portugal', photo: '/images/alyssa2.jpeg', size: 'l-md',  rot:  3  },
  { city: 'Budapest',   country: 'Hungary',  photo: '/images/alyssa2.jpeg', size: 'p-lg',  rot: -2  },
  { city: 'Taipei',     country: 'Taiwan',   photo: '/images/alyssa2.jpeg', size: 'sq',    rot:  5  },
  { city: 'Copenhagen', country: 'Denmark',  photo: '/images/alyssa2.jpeg', size: 'p-xs',  rot: -3  },
  { city: 'Bangkok',    country: 'Thailand', photo: '/images/alyssa2.jpeg', size: 'l-sm',  rot:  2  },
  { city: 'Tokyo',      country: 'Japan',    photo: '/images/alyssa2.jpeg', size: 'p-md',  rot: -5  },
]

const ROW_2 = [
  { city: 'Vienna',     country: 'Austria',  photo: '/images/alyssa2.jpeg', size: 'l-lg',  rot:  3  },
  { city: 'NYC',        country: 'USA',      photo: '/images/alyssa2.jpeg', size: 'p-xs',  rot: -4  },
  { city: 'Malmö',      country: 'Sweden',   photo: '/images/alyssa2.jpeg', size: 'p-md',  rot:  2  },
  { city: 'Munich',     country: 'Germany',  photo: '/images/alyssa2.jpeg', size: 'l-sm',  rot: -5  },
  { city: 'Vancouver',  country: 'Canada',   photo: '/images/alyssa2.jpeg', size: 'p-lg',  rot:  4  },
  { city: 'Lisbon',     country: 'Portugal', photo: '/images/alyssa2.jpeg', size: 'sq',    rot: -2  },
  { city: 'Bratislava', country: 'Slovakia', photo: '/images/alyssa2.jpeg', size: 'l-md',  rot:  1  },
]

function Polaroid({ item }) {
  const [hov, setHov] = useState(false)
  const sz = SIZES[item.size]

  return (
    <div
      className={`polaroid${hov ? ' polaroid--hovered' : ''}`}
      style={{ '--rot': `${item.rot}deg`, '--w': `${sz.w}px`, '--img-h': `${sz.imgH}px` }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="polaroid-pin" />
      <div className="polaroid-img">
        {item.photo
          ? <img src={item.photo} alt={item.city} />
          : <div className="polaroid-placeholder"><span>📷</span></div>
        }
      </div>
      <div className="polaroid-caption">
        <span className="polaroid-city">{item.city}</span>
        <span className="polaroid-country">{item.country}</span>
      </div>
    </div>
  )
}

function GalleryRow({ items }) {
  const rowRef = useRef(null)
  const [hint, setHint] = useState(false)

  useEffect(() => {
    const el = rowRef.current
    if (!el) return

    const check = () => {
      const overflows = el.scrollWidth > el.clientWidth + 4
      const atEnd     = el.scrollLeft + el.clientWidth >= el.scrollWidth - 16
      setHint(overflows && !atEnd)
    }

    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      el.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return (
    <div className="gallery-row-wrap">
      <div className="gallery-line" />
      <div className="gallery-row" ref={rowRef}>
        {items.map((item, i) => <Polaroid key={i} item={item} />)}
      </div>
      <div className={`gallery-hint${hint ? ' gallery-hint--visible' : ''}`}>
        <span>scroll to see more</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="5" x2="13" y2="5" />
          <polyline points="9,1 13,5 9,9" />
        </svg>
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <div className="gallery-section">
      <div className="title scroll-reveal gallery-title">
        <h1>captured.</h1>
        <p>moments from the road</p>
      </div>
      <GalleryRow items={ROW_1} />
      <GalleryRow items={ROW_2} />
    </div>
  )
}

export default function Places() {
  const [hovered,  setHovered]  = useState(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })
  const [zoom,     setZoom]     = useState(1)
  const [center,   setCenter]   = useState([10, 15])
  const mapRef = useRef(null)

  const handleEnter = useCallback((place, e) => {
    const rect = mapRef.current?.getBoundingClientRect()
    if (!rect) return
    setPopupPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setHovered(place)
  }, [])

  const handleMove = useCallback((e) => {
    if (!hovered) return
    const rect = mapRef.current?.getBoundingClientRect()
    if (!rect) return
    setPopupPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [hovered])

  const handleLeave  = useCallback(() => setHovered(null), [])
  const handleMoveEnd = useCallback(({ zoom: z, coordinates }) => {
    setZoom(Math.min(Math.max(z, 1), 4))
    setCenter(coordinates)
  }, [])

  // Clamp popup inside container
  const cW = mapRef.current?.offsetWidth  || 900
  const cH = mapRef.current?.offsetHeight || 500
  const pW = 220, pH = 200
  const px = Math.min(Math.max(popupPos.x + 16, 0), cW - pW)
  const py = popupPos.y > cH - pH - 20 ? popupPos.y - pH - 16 : popupPos.y + 16

  return (
    <>
      <div className="places-page">
        <Navbar />

        <div className="title" style={{ paddingTop: '8vw', paddingLeft: '5vw' }}>
          <h1>places.</h1>
          <p>cities I've traveled to</p>
        </div>

        <div className="places-map-wrap" ref={mapRef} onMouseMove={handleMove}>
          <div className="map-zoom-controls">
            <button onClick={() => setZoom(z => Math.min(z + 0.75, 4))} aria-label="Zoom in">+</button>
            <button onClick={() => setZoom(z => Math.max(z - 0.75, 1))} aria-label="Zoom out">−</button>
          </div>

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 160, center: [10, 15] }}
            width={900}
            height={440}
            style={{ width: '100%', height: '100%' }}
          >
            <ZoomableGroup
              zoom={zoom}
              center={center}
              onMoveEnd={handleMoveEnd}
              minZoom={1}
              maxZoom={4}
              filterZoomEvent={evt => {
                // pinch on trackpad = wheel + ctrlKey; pinch on mobile = touch events
                if (evt.type === 'wheel') return evt.ctrlKey
                return true
              }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="transparent"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover:   { outline: 'none', fill: 'rgba(232,228,220,0.04)' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {PLACES.map(place => {
                const isHovered = hovered?.name === place.name
                return (
                  <Marker
                    key={place.name}
                    coordinates={place.coords}
                    onMouseEnter={e => handleEnter(place, e)}
                    onMouseLeave={handleLeave}
                  >
                    <circle
                      r={(isHovered ? 5.5 : 4) / zoom}
                      fill={isHovered ? '#e8c84a' : 'rgba(232,228,220,0.8)'}
                      stroke={isHovered ? '#e8c84a' : 'rgba(232,228,220,0.35)'}
                      strokeWidth={(isHovered ? 2 : 1) / zoom}
                      style={{
                        cursor: 'pointer',
                        transition: 'fill 0.2s, r 0.2s',
                        filter: isHovered
                          ? 'drop-shadow(0 0 5px rgba(232,200,74,0.85))'
                          : 'none',
                      }}
                    />
                  </Marker>
                )
              })}
            </ZoomableGroup>
          </ComposableMap>

          {hovered && (
            <div className="place-popup" style={{ left: px, top: py }}>
              <Slideshow photos={hovered.photos} name={hovered.name} />
              <div className="popup-info">
                <span className="popup-city">{hovered.name}</span>
                <span className="popup-country">{hovered.country}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Gallery />

      <Footer />
    </>
  )
}
