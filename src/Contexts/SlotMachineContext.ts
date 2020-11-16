import React from 'react'
import { initialState } from './reducer'
import SlotMachineContextType from '../Models/SlotMachineContextType'

const SlotMachineContext = React.createContext<SlotMachineContextType>({
  state: initialState,
  dispatch: () => undefined,
})

export default SlotMachineContext
