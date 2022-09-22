import React, { useState, useEffect } from 'react'
import { getForwardComponent } from '../../utils/redux';
function Home(props: any) {
  useEffect(() => {
    console.log(props)
  })
  return (
    <div>Home</div>
  )
}

export default getForwardComponent(Home)