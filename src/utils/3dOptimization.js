// 3D model optimization utilities

export const optimizeGLTFModel = (model) => {
  // Reduce polygon count and optimize materials
  model.traverse((child) => {
    if (child.isMesh) {
      // Simplify geometry
      if (child.geometry.attributes.position) {
        // Reduce vertex count by 50% for mobile
        if (window.innerWidth < 768) {
          child.geometry = simplifyGeometry(child.geometry, 0.5)
        }
      }
      
      // Optimize materials
      if (child.material) {
        child.material.transparent = false // Disable transparency for better performance
        child.material.depthWrite = true
      }
    }
  })
  return model
}

export const simplifyGeometry = (geometry, factor) => {
  // Basic geometry simplification - use a proper library like simplify-geometry for production
  const simplified = geometry.clone()
  const positions = simplified.attributes.position.array
  
  // Reduce vertex count by factor
  const newVertexCount = Math.floor(positions.length / 3 * factor)
  const newPositions = new Float32Array(newVertexCount * 3)
  
  for (let i = 0; i < newVertexCount * 3; i++) {
    newPositions[i] = positions[i]
  }
  
  simplified.attributes.position.array = newPositions
  simplified.attributes.position.count = newVertexCount
  
  return simplified
}

export const preloadGLTF = async (url) => {
  // Preload GLTF models with caching
  const cache = new Map()
  
  if (cache.has(url)) {
    return cache.get(url)
  }
  
  const response = await fetch(url)
  const blob = await response.blob()
  const objectURL = URL.createObjectURL(blob)
  
  cache.set(url, objectURL)
  return objectURL
}
