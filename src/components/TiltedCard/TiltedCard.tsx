import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import type { TiltedCardProps } from '../../types/TiltedCard'

function TiltedCard({
  coverImage,
  altText = '',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '100%',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  onClick,
}: TiltedCardProps) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 })
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 })
  const scale = useSpring(1, { damping: 30, stiffness: 100, mass: 2 })
  const overlayOpacity = useSpring(0)
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 })
  const [lastY, setLastY] = useState(0)

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return
    const rect = (ref.current as HTMLElement).getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude)
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude)
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
    rotateFigcaption.set(-(offsetY - lastY) * 0.6)
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
    overlayOpacity.set(0.85)
  }

  function handleMouseLeave() {
    overlayOpacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    <figure
      ref={ref}
      onClick={onClick}
      className="relative w-full h-full flex flex-col items-center justify-center perspective-midrange cursor-pointer"
      style={{ height: containerHeight, width: containerWidth, maxWidth: '420px', minWidth: '220px' }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden text-(--text-muted)">
          Este efecto no está optimizado para móvil.
        </div>
      )}

      <motion.div
        className="relative w-full h-full transform-3d"
        style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
      >
        <motion.img
          src={coverImage}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover will-change-transform rounded-xl"
          style={{ transform: 'translateZ(0px)' }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4 bg-(--void)"
          style={{ opacity: overlayOpacity, transform: 'translateZ(20px)' }}
        >
          <span className="text-xs text-(--terra) tracking-widest mb-1">
            {captionText}
          </span>
          <span className="text-xs text-(--accent) tracking-wider mt-2">
            escuchar →
          </span>
        </motion.div>
      </motion.div>
      {/* Responsive: mostrar advertencia en móvil, ajustar tamaño */}
      <style>{`
        @media (max-width: 640px) {
          figure {
            min-width: 90vw !important;
            max-width: 98vw !important;
            height: 220px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          figure {
            min-width: 320px !important;
            max-width: 420px !important;
            height: 260px !important;
          }
        }
      `}</style>
    </figure>
  )
}

export default TiltedCard