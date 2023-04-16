'use client'

import { useState } from 'react'

export function LikeButton({ id }: { id: string }) {
  const [ liked, setLiked ] = useState(false)

  return (
    <button
      style={{
        backgroundColor: 'crimson',
        padding: '.5rem 1rem',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '20px'
      }}
      onClick={() => setLiked( !liked )}
    >
      { liked ? '♥' : '♡' }
    </button>
  )
}
