import { useEffect, useRef } from 'react'

export default function GrainOverlay() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animFrame
    let lastTime = 0
    const FPS = 12 // Slow flicker — filmic, not digital

    // Small canvas, scaled up via CSS for chunky grain
    const GRAIN_W = 256
    const GRAIN_H = 256
    canvas.width = GRAIN_W
    canvas.height = GRAIN_H

    const imageData = ctx.createImageData(GRAIN_W, GRAIN_H)
    const data = imageData.data

    function renderGrain(time) {
      animFrame = requestAnimationFrame(renderGrain)

      // Throttle to target FPS
      if (time - lastTime < 1000 / FPS) return
      lastTime = time

      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = 255
      }

      ctx.putImageData(imageData, 0, 0)
    }

    animFrame = requestAnimationFrame(renderGrain)

    return () => cancelAnimationFrame(animFrame)
  }, [])

  return <canvas ref={canvasRef} id="grain-canvas" />
}
