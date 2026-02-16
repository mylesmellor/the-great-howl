import { useEffect, useRef } from 'react'

/**
 * Generates a unique placeholder product image on canvas.
 * Each product gets a deterministic but distinct texture based on its seed.
 */

function seededRandom(seed) {
  let s = seed
  return function () {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function hashString(str) {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) & 0xffffffff
  }
  return Math.abs(hash)
}

export default function ProductImage({ seed = 'product', alt = '', className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = 400
    const H = 400
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d')
    const rand = seededRandom(hashString(seed))

    // Base tone — varies per product
    const baseR = 42 + rand() * 20
    const baseG = 38 + rand() * 15
    const baseB = 30 + rand() * 15
    ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`
    ctx.fillRect(0, 0, W, H)

    // Mottled patches
    for (let i = 0; i < 15; i++) {
      const x = rand() * W
      const y = rand() * H
      const r = 40 + rand() * 160
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      const b = rand() * 0.1 + 0.03
      grad.addColorStop(0, `rgba(139,126,106,${b})`)
      grad.addColorStop(0.6, `rgba(58,50,38,${b * 0.4})`)
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)
    }

    // Speckle
    const imageData = ctx.getImageData(0, 0, W, H)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      if (rand() < 0.35) {
        const shift = (rand() - 0.5) * 24
        data[i] = Math.min(255, Math.max(0, data[i] + shift))
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + shift))
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + shift))
      }
    }
    ctx.putImageData(imageData, 0, 0)

    // Hairline scratches
    ctx.strokeStyle = `rgba(92,84,73,${0.1 + rand() * 0.1})`
    ctx.lineWidth = 0.5
    for (let c = 0; c < 12; c++) {
      ctx.beginPath()
      let x = rand() * W
      let y = rand() * H
      ctx.moveTo(x, y)
      const segs = 5 + Math.floor(rand() * 12)
      for (let s = 0; s < segs; s++) {
        x += (rand() - 0.5) * 50
        y += rand() * 35 - 8
        ctx.lineTo(x, y)
      }
      ctx.stroke()
    }

    // Warm stain
    for (let i = 0; i < 3; i++) {
      const x = rand() * W
      const y = rand() * H
      const r = 30 + rand() * 120
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      grad.addColorStop(0, `rgba(162,99,59,${0.03 + rand() * 0.03})`)
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)
    }

    // Edge darkening
    const edgeGrad = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.55)
    edgeGrad.addColorStop(0, 'transparent')
    edgeGrad.addColorStop(1, 'rgba(20,18,16,0.35)')
    ctx.fillStyle = edgeGrad
    ctx.fillRect(0, 0, W, H)

    // Centered product label silhouette (abstract shape)
    ctx.globalAlpha = 0.06
    ctx.fillStyle = '#D4C5B0'
    ctx.beginPath()
    const cx = W / 2 + (rand() - 0.5) * 40
    const cy = H / 2 + (rand() - 0.5) * 30
    const size = 60 + rand() * 40
    // Simple imperfect circle
    for (let a = 0; a < Math.PI * 2; a += 0.2) {
      const wobble = size + (rand() - 0.5) * 12
      const px = cx + Math.cos(a) * wobble
      const py = cy + Math.sin(a) * wobble
      a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.fill()
    ctx.globalAlpha = 1

  }, [seed])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={alt}
      role="img"
      style={{
        width: '100%',
        aspectRatio: '1',
        display: 'block',
        imageRendering: 'auto',
        filter: 'grayscale(10%) contrast(0.95)',
      }}
    />
  )
}
