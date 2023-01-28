import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function detail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
        <p>user detail page {id}</p>
    </div>
  )
}
