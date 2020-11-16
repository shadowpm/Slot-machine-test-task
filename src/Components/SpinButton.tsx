import React, { useContext } from 'react'
import styled from 'styled-components'
import SlotMachineContext from '../Contexts/SlotMachineContext'
import { CreateSpinAction } from '../Contexts/actions'

const SpinButton: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(SlotMachineContext)
  return (
    <Button onClick={() => dispatch(new CreateSpinAction())} disabled={state.balance === 0}>
      Spin
    </Button>
  )
}

const Button = styled.button`
  background-color: #fff;
  border-radius:  6px;
  border: 1px solid #fff;
  display: inline-block;
  color: #000000;
  font-family: arial;
  font-size: 15px;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  width: 100px;
  text-align: center;
  cursor:  pointer;
}
  &:hover {
    background-color: #bfc7c1;
  &:classname: active {
    position: relative;
    top: 1px;
`

export default SpinButton
