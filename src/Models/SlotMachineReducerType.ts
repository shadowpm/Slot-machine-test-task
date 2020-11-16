import { Reducer } from 'react'
import SlotMachineState from './SlotMachineState'
import { Actions } from '../Contexts/actions'

type SlotMachineReducerType = Reducer<SlotMachineState, Actions>

export default SlotMachineReducerType
