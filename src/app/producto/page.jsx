'use client'

import React from 'react'
import Button from '../components/ui/Button'
import { useRouter } from 'next/navigation'
import MyComponent from '../data/fakeapi'

const Producto = () => {
  const router = useRouter()
  return (
    <>
        <div>Productos en construccion</div>
        <Button onClick={() => router.back()}>Volver</Button>
        <MyComponent/>
    </>
    
  )
}

export default Producto