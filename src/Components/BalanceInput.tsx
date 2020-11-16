import React, { useContext } from 'react'
import SlotMachineContext from '../Contexts/SlotMachineContext'
import { CreateSetBalanceAction } from '../Contexts/actions'
import styled from 'styled-components'

const BalanceInput: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(SlotMachineContext)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(new CreateSetBalanceAction(event.target.value ? +event.target.value : undefined))
  }

  return (
    <Container>
      <input placeholder="Enter balance to start" value={state.balance} onChange={handleOnChange} />
    </Container>
  )
}

export default BalanceInput

const Container = styled.div`
  margin-top: 10px;
`
