import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function ThreeCardScene({ colorA = '#22d3ee', colorB = '#a855f7' }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 3.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const geo = new THREE.TorusKnotGeometry(0.9, 0.28, 150, 16)
    const mat = new THREE.MeshStandardMaterial({ color: colorA, metalness: 0.5, roughness: 0.25, emissive: new THREE.Color(colorB), emissiveIntensity: 0.25 })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    const light1 = new THREE.PointLight(0x66ccff, 1.1, 10)
    light1.position.set(2, 2, 2)
    scene.add(light1)
    const light2 = new THREE.PointLight(0xff66ff, 0.9, 10)
    light2.position.set(-2, -1, 1)
    scene.add(light2)

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(container)
    resize()

    const tick = () => {
      mesh.rotation.x += 0.008
      mesh.rotation.y += 0.01
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(tick)
    }
    tick()

    const hoverIn = () => gsap.to(mesh.scale, { x: 1.08, y: 1.08, z: 1.08, duration: 0.4, ease: 'power2.out' })
    const hoverOut = () => gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.5, ease: 'power2.out' })
    container.addEventListener('mouseenter', hoverIn)
    container.addEventListener('mouseleave', hoverOut)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      container.removeEventListener('mouseenter', hoverIn)
      container.removeEventListener('mouseleave', hoverOut)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [colorA, colorB])

  return <div ref={containerRef} className="w-full h-full" />
}
