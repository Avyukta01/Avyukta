"use client"

import { useEffect, useRef } from 'react'

interface ElevenLabsWidgetProps {
  agentId: string
}

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="elevenlabs/convai-widget-embed"]')
    if (existingScript) {
      // If script already exists, just create the element
      if (containerRef.current) {
        const convaiElement = document.createElement('elevenlabs-convai')
        convaiElement.setAttribute('agent-id', agentId)
        containerRef.current.appendChild(convaiElement)
      }
      return
    }

    // Load the ElevenLabs script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
    script.async = true
    script.type = 'text/javascript'
    scriptRef.current = script
    
    script.onload = () => {
      // Create the custom element after script loads
      if (containerRef.current) {
        const convaiElement = document.createElement('elevenlabs-convai')
        convaiElement.setAttribute('agent-id', agentId)
        containerRef.current.appendChild(convaiElement)
      }
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup - only remove if we added it and it still exists
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        try {
          document.head.removeChild(scriptRef.current)
        } catch (error) {
          // Script might have been removed by another component
          console.warn('Script cleanup failed:', error)
        }
      }
      
      // Clean up the convai element
      if (containerRef.current) {
        const convaiElement = containerRef.current.querySelector('elevenlabs-convai')
        if (convaiElement) {
          try {
            containerRef.current.removeChild(convaiElement)
          } catch (error) {
            console.warn('Convai element cleanup failed:', error)
          }
        }
      }
    }
  }, [agentId])

  return <div ref={containerRef} className="w-full" />
} 