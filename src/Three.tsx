import React, { useEffect } from 'react'
import { useActions, useTypedSelector } from './hooks'

const Three = () => {
  const s = useTypedSelector(state => state.common.common.three)

  const { setCommon } = useActions()

  useEffect(() => {
    console.log(3)
  })

  return (
    <div>
      <button onClick={() => setCommon({ three: s + 1 })}>Three click</button>
      <p>{s}</p>
    </div>
  )
}

export default Three
