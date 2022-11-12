import React, { useEffect } from 'react'
import { useActions, useTypedSelector } from './hooks'
import Three from './Three'

const Two = () => {
  const s = useTypedSelector(state => state.common.common.two)

  const { setCommon } = useActions()

  useEffect(() => {
    console.log(2)
  })

  return (
    <div>
      <button onClick={() => setCommon({ two: s + 1 })}>two click</button>
      <p>{s}</p>
      <Three />
    </div>
  )
}

export default Two
