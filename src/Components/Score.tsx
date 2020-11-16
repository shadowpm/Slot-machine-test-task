import React, { useContext } from 'react'
import styled from 'styled-components'
import SlotMachineContext from '../Contexts/SlotMachineContext'

const Score: React.FunctionComponent = () => {
  const { state } = useContext(SlotMachineContext)

  if (!state.score) {
    return null
  }

  return <Container className="score">Score: {state.score.score}</Container>
}

const Container = styled.div`
  margin: 20px auto;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

export default Score
