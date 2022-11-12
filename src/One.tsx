import React, { useEffect, useState } from 'react'
import { useActions, useTypedSelector } from './hooks'

const One = () => {
  const s = useTypedSelector(state => state.common.common.one)

  const [state, setState] = useState(1)
  const [state1, setState1] = useState(1)

  const { setCommon } = useActions()

  useEffect(() => {
    console.log(1)
  })

  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            setState(p => ++p)
            setState1(p => ++p)
          }, 500)
        }}
      >
        one click
      </button>
      <p>{s}</p>

      <button onClick={() => setState(p => ++p)}>one click</button>
      <p>{state}</p>
      <p>{state1}</p>
    </div>
  )
}

export default One
