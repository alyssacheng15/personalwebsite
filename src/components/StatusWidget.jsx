import { useState } from 'react'
import '../styles/status-widget.css'

// Change these to update your status
const STATUS = {
  text: 'currently: chasing sunsets',
  emoji: '◐',
}

export default function StatusWidget() {
  const [showBubble, setShowBubble] = useState(false)
  const [waving, setWaving] = useState(false)

  const handleClick = () => {
    setShowBubble(true)
    setWaving(true)
    setTimeout(() => setWaving(false), 1200)
    setTimeout(() => setShowBubble(false), 4000)
  }

  return (
    <div className="status-widget">
      {showBubble && (
        <div className="status-bubble">
          <span className="bubble-emoji">{STATUS.emoji}</span>
          <span>{STATUS.text}</span>
          <div className="bubble-tail" />
        </div>
      )}

      <button
        className={`status-character${waving ? ' status-character--waving' : ''}`}
        onClick={handleClick}
        aria-label="View status"
      >
        <div className="character">
          <div className="character-cap">
            <div className="cap-band" />
          </div>
          <div className="character-body">
            <div className="character-head">
              <div className="blush blush-left" />
              <div className="blush blush-right" />
              <div className="eye eye-left" />
              <div className="eye eye-right" />
              <div className="mouth" />
            </div>
            <div className="character-torso" />
            <div className="arm arm-left" />
            <div className="arm arm-right" />
          </div>
          <div className="character-shadow" />
        </div>
        <div className="activity-label">
          <span>psst!</span>
          <span>click me</span>
        </div>
      </button>
    </div>
  )
}
