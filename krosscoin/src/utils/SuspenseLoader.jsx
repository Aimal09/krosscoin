import React from 'react'

function SuspenseLoader() {
  return (
    <div id='suspense' className='h-screen w-screen flex items-center justify-center bg-primary'>
      <div className="loader">Loading...</div>
    </div>
  )
}

export default SuspenseLoader