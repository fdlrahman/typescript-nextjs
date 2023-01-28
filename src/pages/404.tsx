import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [])

  return (
    <div>
        <h1 className='title-not-found'>Ooooppsss...</h1>
        <h3 className='title-not-found'>Halaman yang anda cari tidak ditemukan!</h3>
    </div>
  )
}
