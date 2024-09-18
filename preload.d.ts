import { IpcHandler } from '../phiscord/main/preload'

declare global {
  interface Window {
    ipc: IpcHandler
  }
}
