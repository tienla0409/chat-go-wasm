import { ReactNode, useEffect } from 'react'
import useWebSocketStore from '../stores/useWebSocketStore'
import useAuthStore from '../stores/useAuthStore'

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { authToken } = useAuthStore()
  const { websocket, initWebSocket, removeSocket } = useWebSocketStore()

  useEffect(() => {
    console.log('websocket, authToken', websocket, authToken)
    if (websocket || !authToken) return
    else initWebSocket()

    return () => {
      if (!websocket) return
      removeSocket()
    }
  }, [websocket, initWebSocket, authToken, removeSocket])

  return children
}

export default SocketProvider
