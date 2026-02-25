"use client"

import { useState, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"
import * as THREE from "three"
import Link from "next/link"
import { ChevronDown, Zap, Globe, Lightbulb, Palette, Rocket } from "lucide-react"

function AnimatedDemographicSphere() {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  const { positions, colors } = useRef({
    positions: new Float32Array(3000 * 3),
    colors: new Float32Array(3000 * 3),
  }).current

  useEffect(() => {
    const hotspots = [
      { lat: 28.6, lon: 77.2, intensity: 1, color: [1, 0.8, 0.2] }, // India - Amber
      { lat: 40.7, lon: -74, intensity: 0.9, color: [0.2, 0.8, 1] }, // NYC - Teal
      { lat: 51.5, lon: -0.1, intensity: 0.85, color: [0.6, 0.3, 1] }, // London - Purple
      { lat: 35.7, lon: 139.7, intensity: 0.9, color: [0.2, 0.8, 1] }, // Tokyo - Teal
      { lat: 22.3, lon: 114.2, intensity: 0.8, color: [1, 0.4, 0.4] }, // Hong Kong - Red
      { lat: 37.8, lon: -122.4, intensity: 0.8, color: [0.2, 0.8, 1] }, // SF - Teal
    ]

    const radius = 2.02

    for (let i = 0; i < 3000; i++) {
      let lat: number, lon: number, intensity: number, color: number[]

      if (i < 3000 * 0.75) {
        const hotspot = hotspots[Math.floor(Math.random() * hotspots.length)]
        const spread = 12 + Math.random() * 18
        lat = hotspot.lat + (Math.random() - 0.5) * spread
        lon = hotspot.lon + (Math.random() - 0.5) * spread
        intensity = hotspot.intensity * (0.6 + Math.random() * 0.4)
        color = hotspot.color
      } else {
        lat = (Math.random() - 0.5) * 140
        lon = (Math.random() - 0.5) * 360
        intensity = 0.2 + Math.random() * 0.3
        color = [0.4, 0.5, 0.8]
      }

      const latRad = (lat * Math.PI) / 180
      const lonRad = (lon * Math.PI) / 180

      const x = radius * Math.cos(latRad) * Math.cos(lonRad)
      const y = radius * Math.sin(latRad)
      const z = radius * Math.cos(latRad) * Math.sin(lonRad)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      colors[i * 3] = color[0] * intensity
      colors[i * 3 + 1] = color[1] * intensity
      colors[i * 3 + 2] = color[2] * intensity
    }

    if (particlesRef.current) {
      particlesRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      )
      particlesRef.current.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      )
    }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0003
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={3000}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={3000}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          toneMapped={false}
        />
      </points>

      {/* Glowing core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial
          color={0xffd700}
          toneMapped={false}
          emissive={0xffd700}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

function SphereCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color={0x20b2aa} />

      <AnimatedDemographicSphere />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={true}
        enablePan={true}
        maxDistance={8}
        minDistance={2}
      />
    </Canvas>
  )
}

export default function WebsiteServicePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative w-full bg-background text-foreground overflow-hidden">
      {/* Hero Section with 3D Sphere */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cosmic-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          {/* 3D Canvas - Right side */}
          <div className="w-full md:w-1/2 h-full">
            <SphereCanvas />
          </div>

          {/* Content - Left side */}
          <div className="w-full md:w-1/2 space-y-8 relative z-20 px-6">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full border border-cosmic-teal/30 bg-cosmic-teal/10">
                <p className="text-sm font-medium text-cosmic-teal">
                  YOU'RE HERE • EXPERIENCING IT NOW
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                <span className="bg-gradient-to-r from-cosmic-teal via-cosmic-blue to-cosmic-amber bg-clip-text text-transparent">
                  This Very Site
                </span>
              </h1>

              <p className="text-xl text-foreground/80 leading-relaxed max-w-lg">
                Yes, you're looking at it right now — a website we built. Every pixel, every animation, every smooth scroll you just experienced? That's our craft in action.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-cosmic-amber to-transparent" />
                  <div>
                    <p className="text-lg font-semibold text-cosmic-amber">
                      Your thoughts become our mission,
                    </p>
                    <p className="text-foreground/70">
                      Every idea you share, we capture with precision and care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-cosmic-teal to-transparent" />
                  <div>
                    <p className="text-lg font-semibold text-cosmic-teal">
                      Your brand deserves to shine,
                    </p>
                    <p className="text-foreground/70">
                      We craft experiences that last, designs that blast.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-cosmic-blue to-transparent" />
                  <div>
                    <p className="text-lg font-semibold text-cosmic-blue">
                      Crazy ideas welcome here,
                    </p>
                    <p className="text-foreground/70">
                      From concept to launch, we make it crystal clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-cosmic-teal/50" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              Here's What We Create
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From blazing-fast performance to pixel-perfect design, we handle every detail so you can focus on growing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Zap,
                title: "Lightning Performance",
                description:
                  "Sub-second load times. We optimize everything—from code splitting to image compression. Your site flies, not crawls.",
              },
              {
                icon: Palette,
                title: "Jaw-Dropping Design",
                description:
                  "Every hover, every scroll, every transition is intentional. We blend aesthetics with functionality seamlessly.",
              },
              {
                icon: Lightbulb,
                title: "Smart Strategy",
                description:
                  "We don't just build pretty things. We understand your audience, your goals, and design systems that convert.",
              },
              {
                icon: Globe,
                title: "Global Ready",
                description:
                  "Responsive, accessible, and SEO-optimized. Your site works everywhere—phones, tablets, desktops, edge cases included.",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cosmic-teal/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                  <Icon className="w-12 h-12 text-cosmic-teal mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-cosmic-amber">Your crazy idea</span> +{" "}
              <span className="text-cosmic-teal">Our execution</span> ={" "}
              <span className="text-cosmic-blue">Magic happens</span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground/80">
                Your vision is bold. Unconventional. Exactly what the market needs but nobody's done yet.
              </p>

              <p className="text-foreground/80">
                We transform it into something real—a website that makes people stop and ask,{" "}
                <span className="text-cosmic-amber italic">"How did they build this?"</span>
              </p>

              <p className="text-foreground/80">
                Every element has purpose. Every animation tells a story. Every interaction feels natural.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 p-6 rounded-xl bg-cosmic-amber/10 border border-cosmic-amber/20">
                <div className="text-3xl font-bold text-cosmic-amber">100ms</div>
                <div className="text-sm text-foreground/70">Average load time</div>
              </div>

              <div className="flex-1 p-6 rounded-xl bg-cosmic-teal/10 border border-cosmic-teal/20">
                <div className="text-3xl font-bold text-cosmic-teal">∞</div>
                <div className="text-sm text-foreground/70">Creative limits</div>
              </div>

              <div className="flex-1 p-6 rounded-xl bg-cosmic-blue/10 border border-cosmic-blue/20">
                <div className="text-3xl font-bold text-cosmic-blue">1:1</div>
                <div className="text-sm text-foreground/70">Your vision to reality</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-teal/20 via-transparent to-cosmic-amber/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Rocket className="w-24 h-24 text-cosmic-teal/40 mx-auto" />
                <p className="text-2xl font-bold text-foreground/40">
                  Launch Mode Activated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pitch */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Ready to build something
              <br />
              <span className="bg-gradient-to-r from-cosmic-teal via-cosmic-blue to-cosmic-amber bg-clip-text text-transparent">
                extraordinary?
              </span>
            </h2>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Your mission is clear. Your vision is bold. Now let's make it real with a website that turns heads and drives results.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cosmic-teal to-cosmic-blue text-background font-bold rounded-lg hover:shadow-lg hover:shadow-cosmic-teal/50 transition-all duration-300 hover:scale-105"
          >
            Get Started Now
          </Link>

          <div className="pt-12 border-t border-white/5">
            <p className="text-sm text-foreground/50">
              From concept to launch, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
