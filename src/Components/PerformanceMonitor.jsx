import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          console.log('Performance Entry:', entry)
          
          // Track Core Web Vitals
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime)
          }
          if (entry.name === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
        }
      })
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    }

    // Monitor resource loading
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0]
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart)
    })
  }, [])

  return null
}

export default PerformanceMonitor
