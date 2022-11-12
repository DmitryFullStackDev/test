import React, { useState } from 'react'
import styled from 'styled-components'
import { Transition, TransitionGroup } from 'react-transition-group'

const Fade: any = styled.div`
  width: 100%;
  background: red;
  margin: 5px;
  transition: 0.5s;
  opacity: ${({ state }: any) => (state === 'entered' ? 1 : 0)};
  display: ${({ state }: any) => (state === 'exited' ? 'none' : 'block')};
`

const Box: any = styled(TransitionGroup)`
  display: flex;
`

function App() {
  const [value, setValue] = useState([1])

  return (
    <>
      <Box>
        {value.map((item, i) => (
          <Transition key={i} timeout={500} unmountOnExit mountOnEnter>
            {state => <Fade state={state}>{item}</Fade>}
          </Transition>
        ))}
        {value.length < 3 && (
          <Transition timeout={500} unmountOnExit mountOnEnter>
            {state => <Fade state={state}>hello</Fade>}
          </Transition>
        )}
      </Box>

      <button onClick={() => setValue(p => [...p, 0])}>add</button>
      <button onClick={() => setValue(p => p.slice(0, -1))}>delete</button>
    </>
  )
}

export default App
