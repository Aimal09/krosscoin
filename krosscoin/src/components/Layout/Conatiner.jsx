import React from 'react'

function Container({ children }) {
  //It simply wraps your jsx with the container classname on 3xl screens above
  return (
    <div className='3xl:mx-auto 3xl:container'>
      {children}
    </div>
  )
}

export default Container