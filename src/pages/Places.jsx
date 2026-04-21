import { useState, useCallback, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GEO_URL = '/world-110m.json'

const PLACES = [
  { name: 'San Francisco', country: 'USA',      coords: [-122.4194, 37.7749], photos: [], blurb: 'home base — fog, hills, and the best burritos in the mission.' },
  { name: 'Los Angeles',   country: 'USA',      coords: [-118.2437, 34.0522], photos: [], blurb: 'sunsets at venice, late-night taco runs, traffic that still shocks me.' },
  { name: 'Hawaii',        country: 'USA',      coords: [-155.5828, 19.8968], photos: [], blurb: 'volcanoes, black sand, and snorkeling with sea turtles.' },
  { name: 'New York City', country: 'USA',      coords: [-74.006,   40.7128], photos: [], blurb: 'late nights, dollar slices, and the most walkable chaos.' },
  { name: 'Vancouver',     country: 'Canada',   coords: [-123.1216, 49.2827], photos: [], blurb: 'mountains meet the ocean — granville island and seawall walks.' },
  { name: 'Yellowknife',   country: 'Canada',   coords: [-114.3718, 62.4540], photos: [], blurb: 'chasing the northern lights at -30°c, worth every shiver.' },
  { name: 'Mexico City',   country: 'Mexico',   coords: [-99.1332,  19.4326], photos: [], blurb: 'roma norte cafés, frida\'s house, and unmatched street food.' },
  { name: 'Cabo San Lucas', country: 'Mexico',  coords: [-109.9167, 22.8905], photos: [], blurb: 'arch of cabo, desert meets sea, and slow afternoon sunsets.' },
  { name: 'Lisbon',        country: 'Portugal', coords: [-9.1393,   38.7223], photos: [], blurb: 'pastel buildings, tile facades, and pastéis de nata for breakfast.' },
  { name: 'Copenhagen',    country: 'Denmark',  coords: [12.5683,   55.6761], photos: [], blurb: 'bikes everywhere, nyhavn at golden hour, hygge done right.' },
  { name: 'Malmö',         country: 'Sweden',   coords: [13.0358,   55.6050], photos: [], blurb: 'crossed the öresund bridge for fika and turning torso views.' },
  { name: 'Munich',        country: 'Germany',  coords: [11.5820,   48.1351], photos: [], blurb: 'beer halls, marienplatz, and christmas markets in december.' },
  { name: 'Vienna',        country: 'Austria',  coords: [16.3738,   48.2082], photos: [], blurb: 'imperial palaces, sachertorte, and concerts in candlelit halls.' },
  { name: 'Bratislava',    country: 'Slovakia', coords: [17.1077,   48.1486], photos: [], blurb: 'a quiet old town with a castle on the hill — underrated stop.' },
  { name: 'Budapest',      country: 'Hungary',  coords: [19.0402,   47.4979], photos: [], blurb: 'thermal baths, ruin bars, and the danube at night.' },
  { name: 'Bangkok',       country: 'Thailand', coords: [100.5018,  13.7563], photos: [], blurb: 'temples, night markets, and mango sticky rice on every corner.' },
  { name: 'Tokyo',         country: 'Japan',    coords: [139.6917,  35.6895], photos: [], blurb: 'shibuya crossing, hidden alley izakayas, vending machines for days.' },
  { name: 'Taipei',        country: 'Taiwan',   coords: [121.5654,  25.0330], photos: [], blurb: 'night markets, beef noodles, and family roots — feels like home.' },
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

const ROW = [
  { city: 'Tokyo',      country: 'Japan',    photo: '/images/alyssa2.jpeg', size: 'p-sm',  rot: -4  },
  { city: 'Lisbon',     country: 'Portugal', photo: '/images/alyssa2.jpeg', size: 'l-md',  rot:  3  },
  { city: 'Budapest',   country: 'Hungary',  photo: '/images/alyssa1.jpeg', size: 'p-lg',  rot: -2  },
  { city: 'Taipei',     country: 'Taiwan',   photo: '/images/alyssa2.jpeg', size: 'sq',    rot:  5  },
  { city: 'Copenhagen', country: 'Denmark',  photo: '/images/alyssa2.jpeg', size: 'p-xs',  rot: -3  },
  { city: 'Bangkok',    country: 'Thailand', photo: '/images/alyssa2.jpeg', size: 'l-sm',  rot:  2  },
  { city: 'Tokyo',      country: 'Japan',    photo: '/images/alyssa2.jpeg', size: 'p-md',  rot: -5  },
  { city: 'Vienna',     country: 'Austria',  photo: '/images/alyssa2.jpeg', size: 'l-lg',  rot:  3  },
  { city: 'NYC',        country: 'USA',      photo: '/images/alyssa1.jpeg', size: 'p-xs',  rot: -4  },
  { city: 'Malmö',      country: 'Sweden',   photo: '/images/alyssa2.jpeg', size: 'p-md',  rot:  2  },
  { city: 'Munich',     country: 'Germany',  photo: '/images/alyssa1.jpeg', size: 'l-sm',  rot: -5  },
  { city: 'Vancouver',  country: 'Canada',   photo: '/images/alyssa2.jpeg', size: 'p-lg',  rot:  4  },
  { city: 'Lisbon',     country: 'Portugal', photo: '/images/alyssa2.jpeg', size: 'sq',    rot: -2  },
  { city: 'Bratislava', country: 'Slovakia', photo: '/images/alyssa2.jpeg', size: 'l-md',  rot:  1  },
  { city: 'Mexico City', country: 'Mexico', photo: '/images/alyssa3.jpeg', size: 'l-md',  rot:  1  },
  { city: 'Yellowknife', country: 'Canada', photo: '/images/alyssa2.jpeg', size: 'l-md',  rot:  1  },
]

function PlaceCard({ item }) {
  return (
    <div className="vsco-card">
      {item.photo && <img src={item.photo} alt={item.city} className="vsco-img" />}
      <p className="vsco-caption">{item.city.toLowerCase()}</p>
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
      <div className="vsco-gallery">
        {ROW.map((item, i) => (
          <PlaceCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

function PanelEntry({ place, selected, onSelect, entryRef }) {
  return (
    <div
      ref={entryRef}
      className={`panel-entry${selected ? ' panel-entry--selected' : ''}`}
      onClick={() => onSelect(place)}
    >
      <div className="entry-photo">
        <Slideshow photos={place.photos} name={place.name} />
      </div>
      <div className="entry-info">
        <h3>{place.name}</h3>
        <span className="entry-country">{place.country}</span>
        <p className="entry-blurb">{place.blurb}</p>
      </div>
    </div>
  )
}

const HOME_VIEW = { zoom: 1, center: [10, 15] }
const FOCUS_ZOOM = 3
const MOBILE_QUERY = '(max-width: 1000px)'

export default function Places() {
  const [hovered,  setHovered]  = useState(null)
  const [selected, setSelected] = useState(null)
  const [panelOpen, setPanelOpen] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  )
  const [zoom,     setZoom]     = useState(HOME_VIEW.zoom)
  const [center,   setCenter]   = useState(HOME_VIEW.center)
  const mapRef = useRef(null)
  const layoutRef = useRef(null)
  const wasOpenRef = useRef(false)
  const zoomRef = useRef(zoom)
  const centerRef = useRef(center)
  const animRef = useRef(null)
  const panelScrollRef = useRef(null)
  const panelRef = useRef(null)
  const entryRefs = useRef({})

  useEffect(() => { zoomRef.current = zoom }, [zoom])
  useEffect(() => { centerRef.current = center }, [center])

  // When the panel goes from closed → open due to a user click, scroll page to it
  // only if it's not already in view. Skip the auto page-scroll for the initial
  // mobile auto-open (no user action triggered it).
  useEffect(() => {
    if (!panelOpen) {
      wasOpenRef.current = false
      return
    }
    if (!wasOpenRef.current && selected) {
      const el = layoutRef.current
      if (el) {
        const r = el.getBoundingClientRect()
        const fullyVisible = r.top >= 0 && r.bottom <= window.innerHeight
        const partlyVisible = r.bottom > 80 && r.top < window.innerHeight - 80
        if (!fullyVisible && !partlyVisible) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      wasOpenRef.current = true
    }
  }, [panelOpen, selected])

  // Scroll the selected entry into view inside the panel only — never the page.
  useEffect(() => {
    if (!selected || !panelOpen) return
    const container = panelScrollRef.current
    const el = entryRefs.current[selected.name]
    if (!container || !el) return
    requestAnimationFrame(() => {
      const cRect = container.getBoundingClientRect()
      const eRect = el.getBoundingClientRect()
      const target = eRect.top - cRect.top + container.scrollTop - 12
      container.scrollTo({ top: target, behavior: 'smooth' })
    })
  }, [selected, panelOpen])

  // Force wheel + touch events on the panel to scroll the panel, never the page.
  useEffect(() => {
    if (!panelOpen) return
    const panel = panelRef.current
    if (!panel) return
    const onWheel = (e) => {
      const sc = panelScrollRef.current
      if (!sc) return
      e.preventDefault()
      e.stopPropagation()
      sc.scrollTop += e.deltaY
    }
    let touchY = 0
    const onTouchStart = (e) => { touchY = e.touches[0].clientY }
    const onTouchMove = (e) => {
      const sc = panelScrollRef.current
      if (!sc) return
      const newY = e.touches[0].clientY
      const dy = touchY - newY
      touchY = newY
      e.preventDefault()
      sc.scrollTop += dy
    }
    panel.addEventListener('wheel', onWheel, { passive: false, capture: true })
    panel.addEventListener('touchstart', onTouchStart, { passive: false })
    panel.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      panel.removeEventListener('wheel', onWheel, { capture: true })
      panel.removeEventListener('touchstart', onTouchStart)
      panel.removeEventListener('touchmove', onTouchMove)
    }
  }, [panelOpen])

  useEffect(() => () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
  }, [])

  const cancelAnim = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
  }, [])

  const animateTo = useCallback((targetZoom, targetCenter, duration = 700) => {
    cancelAnim()
    const startZoom = zoomRef.current
    const startCenter = [...centerRef.current]
    const startTime = performance.now()
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1)
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      setZoom(startZoom + (targetZoom - startZoom) * e)
      setCenter([
        startCenter[0] + (targetCenter[0] - startCenter[0]) * e,
        startCenter[1] + (targetCenter[1] - startCenter[1]) * e,
      ])
      if (t < 1) animRef.current = requestAnimationFrame(tick)
      else animRef.current = null
    }
    animRef.current = requestAnimationFrame(tick)
  }, [cancelAnim])

  const handleMoveEnd = useCallback(({ zoom: z, coordinates }) => {
    if (animRef.current) return
    setZoom(Math.min(Math.max(z, 1), 4))
    setCenter(coordinates)
  }, [])

  const handleSelect = useCallback((place) => {
    setSelected(place)
    setPanelOpen(true)
    animateTo(FOCUS_ZOOM, place.coords)
  }, [animateTo])

  const handleClose = useCallback(() => {
    setPanelOpen(false)
    setSelected(null)
    animateTo(HOME_VIEW.zoom, HOME_VIEW.center)
  }, [animateTo])

  const handleMapMouseEnter = useCallback(() => {
    document.body.dataset.nodeQuiet = 'true'
  }, [])
  const handleMapMouseLeave = useCallback(() => {
    document.body.dataset.nodeQuiet = 'false'
  }, [])
  useEffect(() => () => { document.body.dataset.nodeQuiet = 'false' }, [])

  const handleZoomBtn = useCallback((delta) => {
    cancelAnim()
    setZoom(z => Math.min(Math.max(z + delta, 1), 4))
  }, [cancelAnim])

  return (
    <>
      <div className="places-page">
        <Navbar />

        <div className="page-head">
          <span className="section-num">● Places</span>
          <h1>cities i've<br />traveled to.</h1>
          <p className="sub">stamps in the passport, snapshots in the rolls.</p>
        </div>

        <div
          className={`places-layout${panelOpen ? ' places-layout--open' : ''}`}
          ref={layoutRef}
        >
          <div
            className="places-map-wrap"
            ref={mapRef}
            onMouseEnter={handleMapMouseEnter}
            onMouseLeave={handleMapMouseLeave}
          >
            <div className="map-zoom-controls">
              <button onClick={() => handleZoomBtn(0.75)} aria-label="Zoom in">+</button>
              <button onClick={() => handleZoomBtn(-0.75)} aria-label="Zoom out">−</button>
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
                  const isSelected = selected?.name === place.name
                  const isHovered  = hovered?.name === place.name
                  const active     = isSelected || isHovered
                  return (
                    <Marker
                      key={place.name}
                      coordinates={place.coords}
                      onMouseEnter={() => setHovered(place)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => handleSelect(place)}
                    >
                      <circle
                        r={(active ? 5.5 : 4) / zoom}
                        fill={active ? '#e8c84a' : 'rgba(232,228,220,0.8)'}
                        stroke={active ? '#e8c84a' : 'rgba(232,228,220,0.35)'}
                        strokeWidth={(active ? 2 : 1) / zoom}
                        style={{
                          cursor: 'pointer',
                          transition: 'fill 0.2s, r 0.2s',
                          filter: active
                            ? 'drop-shadow(0 0 5px rgba(232,200,74,0.85))'
                            : 'none',
                        }}
                      />
                    </Marker>
                  )
                })}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {panelOpen && (
            <aside className="places-panel" role="complementary" ref={panelRef}>
              <div className="panel-header">
                <span className="panel-title">destinations</span>
                <button
                  className="panel-close"
                  onClick={handleClose}
                  aria-label="Close panel"
                >
                  ×
                </button>
              </div>
              <div className="panel-scroll" ref={panelScrollRef}>
                {PLACES.map(p => (
                  <PanelEntry
                    key={p.name}
                    place={p}
                    selected={selected?.name === p.name}
                    onSelect={handleSelect}
                    entryRef={el => { entryRefs.current[p.name] = el }}
                  />
                ))}
              </div>
            </aside>
          )}
        </div>
      </div>

      <Gallery />

      <Footer />
    </>
  )
}
