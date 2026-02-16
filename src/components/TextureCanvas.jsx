import { useEffect, useRef } from 'react'

/**
 * Generates a static weathered/cracked concrete texture on a canvas.
 * Drawn once on mount — pure atmospheric background.
 */
export default function TextureCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = 1400
    const H = 1000
    canvas.width = W
    canvas.height = H

    const ctx = canvas.getContext('2d')

    // Base: dark weathered surface
    ctx.fillStyle = '#1C1C1A'
    ctx.fillRect(0, 0, W, H)

    // Layer 1: Large mottled patches — more of them, stronger
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * W
      const y = Math.random() * H
      const r = 80 + Math.random() * 400
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      const brightness = Math.random() * 0.12 + 0.04
      grad.addColorStop(0, `rgba(139,126,106,${brightness})`)
      grad.addColorStop(0.5, `rgba(58,50,38,${brightness * 0.6})`)
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)
    }

    // Layer 2: Coarser speckle, more coverage
    const imageData = ctx.getImageData(0, 0, W, H)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      if (Math.random() < 0.45) {
        const shift = (Math.random() - 0.5) * 30
        data[i] = Math.min(255, Math.max(0, data[i] + shift))
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + shift))
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + shift))
      }
    }
    ctx.putImageData(imageData, 0, 0)

    // Layer 3: Hairline cracks — more, longer, more visible
    ctx.strokeStyle = 'rgba(92,84,73,0.22)'
    ctx.lineWidth = 0.7

    for (let c = 0; c < 40; c++) {
      ctx.beginPath()
      let x = Math.random() * W
      let y = Math.random() * H
      ctx.moveTo(x, y)

      const segments = 10 + Math.floor(Math.random() * 25)
      for (let s = 0; s < segments; s++) {
        x += (Math.random() - 0.5) * 70
        y += Math.random() * 45 - 12
        ctx.lineTo(x, y)
      }
      ctx.stroke()
    }

    // Layer 4: Deeper score marks — more prominent
    ctx.strokeStyle = 'rgba(110,100,85,0.14)'
    ctx.lineWidth = 2

    for (let s = 0; s < 10; s++) {
      ctx.beginPath()
      const x1 = Math.random() * W
      const y1 = Math.random() * H
      const angle = Math.random() * Math.PI
      const len = 100 + Math.random() * 350
      ctx.moveTo(x1, y1)
      ctx.lineTo(x1 + Math.cos(angle) * len, y1 + Math.sin(angle) * len)
      ctx.stroke()
    }

    // Layer 5: Warm stain patches — bigger, more visible
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * W
      const y = Math.random() * H
      const r = 80 + Math.random() * 280
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      grad.addColorStop(0, 'rgba(162,99,59,0.06)')
      grad.addColorStop(0.4, 'rgba(162,99,59,0.03)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)
    }

    // Layer 6: Cool moss-toned patches
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * W
      const y = Math.random() * H
      const r = 60 + Math.random() * 200
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      grad.addColorStop(0, 'rgba(74,93,84,0.04)')
      grad.addColorStop(0.5, 'rgba(74,93,84,0.02)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)
    }

    // Layer 7: Scattered bright flecks (exposed aggregate)
    ctx.fillStyle = 'rgba(212,197,176,0.08)'
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * W
      const y = Math.random() * H
      const s = 0.5 + Math.random() * 2
      ctx.fillRect(x, y, s, s)
    }

    // Layer 8: Edge darkening
    const edgeGrad = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.65)
    edgeGrad.addColorStop(0, 'transparent')
    edgeGrad.addColorStop(1, 'rgba(12,12,10,0.3)')
    ctx.fillStyle = edgeGrad
    ctx.fillRect(0, 0, W, H)

  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        imageRendering: 'auto',
      }}
    />
  )
}
