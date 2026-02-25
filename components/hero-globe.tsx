'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 5.5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create main globe sphere
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64)
    const globeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a1628,
      roughness: 0.9,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95,
    })
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globeMesh)

    // Wireframe sphere
    const wireGeometry = new THREE.SphereGeometry(2.005, 32, 32)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a3a5c,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial)
    scene.add(wireMesh)

    // Glow sphere
    const glowGeometry = new THREE.SphereGeometry(2.08, 48, 48)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    })
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    scene.add(glowMesh)

    // Create demographic points
    const pointCount = 2000
    const pointGeometry = new THREE.BufferGeometry()
    const pointPositions = new Float32Array(pointCount * 3)
    const pointColors = new Float32Array(pointCount * 3)

    const hotspots = [
      { lat: 40.7, lon: -74, intensity: 1.0 },
      { lat: 51.5, lon: -0.1, intensity: 0.9 },
      { lat: 35.7, lon: 139.7, intensity: 0.95 },
      { lat: 22.3, lon: 114.2, intensity: 0.85 },
      { lat: 1.35, lon: 103.8, intensity: 0.7 },
      { lat: 28.6, lon: 77.2, intensity: 0.9 },
      { lat: -23.5, lon: -46.6, intensity: 0.75 },
      { lat: 37.8, lon: -122.4, intensity: 0.8 },
      { lat: 48.9, lon: 2.35, intensity: 0.85 },
      { lat: 55.8, lon: 37.6, intensity: 0.8 },
      { lat: 31.2, lon: 121.5, intensity: 0.95 },
      { lat: -33.9, lon: 18.4, intensity: 0.6 },
      { lat: 19.4, lon: -99.1, intensity: 0.7 },
      { lat: 35.2, lon: -80.8, intensity: 0.65 },
      { lat: 52.5, lon: 13.4, intensity: 0.8 },
      { lat: -34.6, lon: -58.4, intensity: 0.65 },
      { lat: 25.2, lon: 55.3, intensity: 0.75 },
      { lat: 37.6, lon: 127, intensity: 0.85 },
    ]

    const radius = 2.02

    for (let i = 0; i < pointCount; i++) {
      let lat: number, lon: number, intensity: number

      if (i < pointCount * 0.7) {
        const hotspot = hotspots[Math.floor(Math.random() * hotspots.length)]
        const spread = 15 + Math.random() * 20
        lat = hotspot.lat + (Math.random() - 0.5) * spread
        lon = hotspot.lon + (Math.random() - 0.5) * spread
        intensity = hotspot.intensity * (0.5 + Math.random() * 0.5)
      } else {
        lat = (Math.random() - 0.5) * 140
        lon = (Math.random() - 0.5) * 360
        intensity = 0.2 + Math.random() * 0.3
      }

      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lon + 180) * (Math.PI / 180)

      pointPositions[i * 3] = -radius * Math.sin(phi) * Math.cos(theta)
      pointPositions[i * 3 + 1] = radius * Math.cos(phi)
      pointPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

      if (intensity > 0.7) {
        pointColors[i * 3] = 0.95
        pointColors[i * 3 + 1] = 0.6 + intensity * 0.2
        pointColors[i * 3 + 2] = 0.2
      } else if (intensity > 0.4) {
        pointColors[i * 3] = 0.3
        pointColors[i * 3 + 1] = 0.5 + intensity * 0.3
        pointColors[i * 3 + 2] = 1.0
      } else {
        pointColors[i * 3] = 0.1
        pointColors[i * 3 + 1] = 0.7 + intensity * 0.2
        pointColors[i * 3 + 2] = 0.7
      }
    }

    pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))
    pointGeometry.setAttribute('color', new THREE.BufferAttribute(pointColors, 3))

    const pointMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const pointMesh = new THREE.Points(pointGeometry, pointMaterial)
    scene.add(pointMesh)

    // Create orbital rings
    const ring1Geometry = new THREE.TorusGeometry(2.8, 0.005, 16, 100)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
    })
    const ring1 = new THREE.Mesh(ring1Geometry, ringMaterial)
    ring1.rotation.x = Math.PI * 0.1
    scene.add(ring1)

    const ring2Geometry = new THREE.TorusGeometry(3.1, 0.003, 16, 100)
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.2,
    })
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material)
    ring2.rotation.x = Math.PI * 0.35
    ring2.rotation.z = 0.3
    scene.add(ring2)

    // Create orbiting moons
    const moon1Geometry = new THREE.SphereGeometry(0.06, 16, 16)
    const moon1Material = new THREE.MeshBasicMaterial({ color: 0xf59e0b })
    const moon1 = new THREE.Mesh(moon1Geometry, moon1Material)
    scene.add(moon1)

    const moon2Geometry = new THREE.SphereGeometry(0.04, 16, 16)
    const moon2Material = new THREE.MeshBasicMaterial({ color: 0x14b8a6 })
    const moon2 = new THREE.Mesh(moon2Geometry, moon2Material)
    scene.add(moon2)

    const moon3Geometry = new THREE.SphereGeometry(0.05, 16, 16)
    const moon3Material = new THREE.MeshBasicMaterial({ color: 0x3b82f6 })
    const moon3 = new THREE.Mesh(moon3Geometry, moon3Material)
    scene.add(moon3)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const light1 = new THREE.PointLight(0x3b82f6, 0.8)
    light1.position.set(10, 10, 10)
    scene.add(light1)

    const light2 = new THREE.PointLight(0xf59e0b, 0.4)
    light2.position.set(-10, -5, -10)
    scene.add(light2)

    const light3 = new THREE.PointLight(0x14b8a6, 0.3)
    light3.position.set(0, 10, -5)
    scene.add(light3)

    // Animation loop
    let startTime = Date.now()
    let pointOpacityDirection = 1
    let pointOpacity = 0.8

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const elapsed = (Date.now() - startTime) * 0.001

      // Rotate globe and points
      globeMesh.rotation.y = elapsed * 0.05
      wireMesh.rotation.y = elapsed * 0.05
      glowMesh.rotation.y = elapsed * 0.05
      pointMesh.rotation.y = elapsed * 0.05

      // Oscillate point opacity
      pointOpacity += 0.01 * pointOpacityDirection
      if (pointOpacity >= 0.95 || pointOpacity <= 0.65) {
        pointOpacityDirection *= -1
      }
      ;(pointMaterial as THREE.PointsMaterial).opacity = pointOpacity

      // Rotate rings
      ring1.rotation.x = Math.PI * 0.1 + elapsed * 0.1
      ring1.rotation.z = elapsed * 0.05
      ring2.rotation.x = Math.PI * 0.35 + elapsed * 0.08
      ring2.rotation.z = 0.3 + elapsed * 0.03

      // Orbit moons
      moon1.position.x = Math.cos(elapsed * 0.3) * 3.2
      moon1.position.z = Math.sin(elapsed * 0.3) * 3.2
      moon1.position.y = Math.sin(elapsed * 0.15) * 0.5

      moon2.position.x = Math.cos(elapsed * 0.2 + 2) * 3.6
      moon2.position.z = Math.sin(elapsed * 0.2 + 2) * 3.6
      moon2.position.y = Math.sin(elapsed * 0.1 + 1) * 0.8

      moon3.position.x = Math.cos(elapsed * 0.4 + 4) * 2.6
      moon3.position.z = Math.sin(elapsed * 0.4 + 4) * 2.6
      moon3.position.y = Math.sin(elapsed * 0.2 + 3) * 0.3

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      renderer.dispose()
      globeGeometry.dispose()
      wireGeometry.dispose()
      glowGeometry.dispose()
      pointGeometry.dispose()
      ring1Geometry.dispose()
      ring2Geometry.dispose()
      moon1Geometry.dispose()
      moon2Geometry.dispose()
      moon3Geometry.dispose()
      globeMaterial.dispose()
      wireMaterial.dispose()
      glowMaterial.dispose()
      pointMaterial.dispose()
      ringMaterial.dispose()
      ring2Material.dispose()
      moon1Material.dispose()
      moon2Material.dispose()
      moon3Material.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" aria-label="Interactive 3D globe showing global demographics" />
}
