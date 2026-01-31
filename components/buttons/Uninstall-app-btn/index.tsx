'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function UninstallAppBtn() {
  const router = useRouter()

  const handleReset = async () => {
    localStorage.clear()

    sessionStorage.clear()

    if ('caches' in window) {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map(name => caches.delete(name)))
    }

    router.replace('/')
  }

  return (
    <Button variant="destructive" className="reset-button" onClick={handleReset}>
      Uninstall App
    </Button>
  )
}
