import React, { useState, useEffect } from 'react'
import { getForwardComponent } from '../../utils/redux';
function Home(props: any) {
  useEffect(() => {
    console.log(props)
  })
  return (
    <div>
      <button onClick={() => {
        console.log('??')
        props.dispatch({ type: 'get-list1' })
      }}>Click me</button>
      <button onClick={() => {
        props.dispatch({ type: 'get-list2' })
      }}>Click me2</button>
      {props.state.list1.map((item: any) => (<div key={item}>{ item }</div>))}
      {props.state.list2.map((item: any) => (<div key={item}>{ item }</div>))}
      {props.state.list3.map((item: any) => (<div key={item}>{ item }</div>))}
    </div>
  )
}

export default getForwardComponent(Home)