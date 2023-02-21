import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import * as THREE from 'three'
import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Canvas
    dpr={[1, 2]}
    gl={{
      antialias: false,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputEncoding: THREE.sRGBEncoding
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [3, 2, 6]
    }}
  >
    <Experience />
  </Canvas>,
)
