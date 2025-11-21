import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function ThreeAvatar({ className = '' }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const rafRef = useRef(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 0, 3.2)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0ea5e9'),
      emissive: new THREE.Color('#22d3ee'),
      emissiveIntensity: 0.25,
      metalness: 0.2,
      roughness: 0.3,
      wireframe: false,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.02, 2),
      new THREE.MeshBasicMaterial({ color: '#a855f7', wireframe: true, transparent: true, opacity: 0.35 })
    )
    scene.add(wire)

    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0x88ccff, 1.1)
    dir.position.set(2, 3, 4)
    scene.add(dir)

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const tick = () => {
      mesh.rotation.y += 0.006
      mesh.rotation.x += 0.003
      wire.rotation.y -= 0.004
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(tick)
    }
    tick()

    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    tl.to(material, { emissiveIntensity: 0.6, duration: 2.2, ease: 'sine.inOut' })
    timelineRef.current = tl

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      tl.kill()
      geometry.dispose()
      wire.geometry.dispose()
      material.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={containerRef} className={"relative " + className} style={{ width: '100%', height: '100%' }} />
  )
}
