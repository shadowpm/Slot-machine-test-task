import { Dispatch, ReducerAction, ReducerState } from 'react'
import SlotMachineReducerType from './SlotMachineReducerType'

type SlotMachineContextType = {
  state: ReducerState<SlotMachineReducerType>
  dispatch: Dispatch<ReducerAction<SlotMachineReducerType>>
}

export default SlotMachineContextType
