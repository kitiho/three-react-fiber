import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { BufferGeometry } from 'three'
export default function CustomObject() {
  const geometryRef = useRef<BufferGeometry>(null!)

  const verticesCount = 10 * 3
  const postions = useMemo(() => {
    const res = new Float32Array(verticesCount * 3)
    for (let i = 0; i < verticesCount * 3; i++) {
      res[i] = (Math.random() - 0.5) * 3
    }
    return res
  }, [])

  useEffect(() => {
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals()
    }
  }, [])

  return <mesh>
    <bufferGeometry ref={geometryRef}>
      <bufferAttribute
        attach="attributes-position"
        count={verticesCount}
        itemSize={3}
        array={postions}
      />
    </bufferGeometry>
    <meshStandardMaterial color="red" side={THREE.DoubleSide} />
  </mesh>
}
