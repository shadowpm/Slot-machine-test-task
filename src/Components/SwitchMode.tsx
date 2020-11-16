import React, { useContext } from 'react'
import { CreateToggleModeAction } from '../Contexts/actions'
import SlotMachineContext from '../Contexts/SlotMachineContext'
import Modes from '../Models/Modes'
import styled from 'styled-components'

const SwitchMode: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(SlotMachineContext)

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => dispatch(new CreateToggleModeAction())}
        value={state.mode === Modes.FIXED ? 'true' : 'false'}
        id="switch-mode"
      />
      <Label htmlFor="switch-mode">Fixed mode: please use the positions and press Spin.</Label>
    </div>
  )
}

const Label = styled.label`
  color: #fff;
`
export default SwitchMode
