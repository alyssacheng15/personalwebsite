import { useState } from 'react'
import '../styles/status-widget.css'

export default function StatusWidget() {
  const [showBubble, setShowBubble] = useState(false)
  const currentActivity = 'currently exploring' // Change this to update your status

  const handleClick = () => {
    setShowBubble(true)
    setTimeout(() => setShowBubble(false), 4000)
  }

  return (
    <div className="status-widget">
      {showBubble && (
        <div className="status-bubble">
          <span>{currentActivity}</span>
          <div className="bubble-tail"></div>
        </div>
      )}

      <button
        className="status-character"
        onClick={handleClick}
        aria-label="View status"
      >
        <div className="character">
          <div className="character-body">
            <div className="character-head">
              <div className="eye eye-left"></div>
              <div className="eye eye-right"></div>
              <div className="mouth"></div>
            </div>
            <div className="character-torso"></div>
          </div>
        </div>
        <div className="activity-label">
          <div>what i'm</div>
          <div>up to!</div>
        </div>
      </button>
    </div>
  )
}
