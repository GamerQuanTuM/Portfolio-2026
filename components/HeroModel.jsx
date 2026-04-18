'use client'

import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Environment, 
  ContactShadows, 
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useAnimations
} from '@react-three/drei'

function TokyoModel() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/tokyo/scene.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // 1. Fix corrupted geometry nodes inside the GLTF.
    //    Some meshes in the Littlest Tokyo model have empty or invalid
    //    position attributes, producing NaN bounding spheres which crash WebGL.
    scene.traverse((node) => {
      node.frustumCulled = false

      if ((node.isMesh || node.isLine || node.isPoints) && node.geometry) {
        const posAttr = node.geometry.attributes.position
        if (posAttr) {
          // Check for NaN values in the position buffer and zero them out
          const arr = posAttr.array
          let hasNaN = false
          for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) {
              arr[i] = 0
              hasNaN = true
            }
          }
          if (hasNaN) {
            posAttr.needsUpdate = true
          }
        }
        // Force recompute bounding volumes with clean data
        node.geometry.computeBoundingSphere()
        node.geometry.computeBoundingBox()
      }
    })

    // 2. Play the first animation found in the model
    const action = actions[Object.keys(actions)[0]]
    if (action) {
      action.play()
    }

    return () => {
      if (action) action.stop()
    }
  }, [actions, scene])

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={0.03}
      position={[2, 0, 0]}
      rotation={[0.1, -Math.PI / 4, 0]}
    />
  )
}

export default function HeroModel() {
  return (
    <div className="w-full h-[500px] md:h-screen transition-opacity duration-1000">
      <Canvas shadows camera={{ position: [0, 2, 22], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 2, 22]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 20, 10]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" castShadow />
        
        {/* OrbitControls instead of PresentationControls — 
            PresentationControls uses spring physics that can degenerate 
            on repeated rotations, collapsing the transform matrix */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <Suspense fallback={null}>
          <TokyoModel />
        </Suspense>
        
        <ContactShadows 
          position={[0, -1.6, 0]} 
          opacity={0.5} 
          scale={30} 
          blur={2.5} 
          far={5} 
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

// Preload the heavy model
useGLTF.preload('/models/tokyo/scene.gltf')
