import React from 'react'
import {ReactElement} from 'react'
const Container = (children:ReactElement) => {
  return (
    <div className="container-xl">
        {children}
    </div>
  )
}

export default Container


