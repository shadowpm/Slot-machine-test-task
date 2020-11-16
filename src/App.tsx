import React, { useEffect, useMemo, useReducer } from 'react'
import Reels from './Components/Reels'
import styled from 'styled-components'
import SpinButton from './Components/SpinButton'
import Score from './Components/Score'
import reducer, { initialState } from './Contexts/reducer'
import SlotMachineReducerType from './Models/SlotMachineReducerType'
import SlotMachineContext from './Contexts/SlotMachineContext'
import { CreateSetScoreAction } from './Contexts/actions'
import SwitchMode from './Components/SwitchMode'
import { calculateScore } from './Tools'
import BalanceInput from './Components/BalanceInput'

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer<SlotMachineReducerType>(reducer, initialState)
  const slotMachineContextValue = useMemo(() => ({ state, dispatch }), [state])

  useEffect(() => {
    dispatch(new CreateSetScoreAction(calculateScore(state.reelsValue)))
  }, [state.reelsValue])

  return (
    <Container>
      <SlotMachineContext.Provider value={slotMachineContextValue}>
        <Reels />
        <SpinButton />
        <SwitchMode />
        <Score />
        <BalanceInput />
      </SlotMachineContext.Provider>
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: auto;
  text-align: center;
  .score {
  }
`
