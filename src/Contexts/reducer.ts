import { Actions, SET_BALANCE, SET_FIXED_ELEMENT, SET_SCORE, SPIN, TOGGLE_MODE } from './actions'
import { Reducer } from 'react'
import Modes from '../Models/Modes'
import SlotMachineState from '../Models/SlotMachineState'
import { generateReelsRandomValue } from '../Tools'
import Elements from '../Models/Elements'
import Rings from '../Models/Rings'

export const initialState: SlotMachineState = {
  mode: Modes.RANDOM,
  reelsValue: generateReelsRandomValue(),
  fixedReelsValue: {
    ring1: Elements.CHERRY,
    ring2: Elements.CHERRY,
    ring3: Elements.CHERRY,
  },
}

const reducer: Reducer<SlotMachineState, Actions> = (state, action) => {
  switch (action.type) {
    case SPIN:
      if (!state.balance) {
        return state
      }
      if (state.mode === Modes.FIXED) {
        return { ...state, reelsValue: state.fixedReelsValue, balance: state.balance - 1, score: undefined }
      }
      return { ...state, reelsValue: action.reelsValue, balance: state.balance - 1 }
    case TOGGLE_MODE:
      return { ...state, mode: state.mode === Modes.FIXED ? Modes.RANDOM : Modes.FIXED }
    case SET_FIXED_ELEMENT:
      const fixedReelsValue = { ...state.fixedReelsValue }

      if (action.ring === Rings.RING1) {
        fixedReelsValue.ring1 = action.value
      } else if (action.ring === Rings.RING2) {
        fixedReelsValue.ring2 = action.value
      } else {
        fixedReelsValue.ring3 = action.value
      }

      return { ...state, fixedReelsValue }
    case SET_BALANCE:
      if (action.balance && action.balance > 5000) {
        return { ...state, balance: 5000 }
      } else if (action.balance && action.balance < 0) {
        return { ...state, balance: 0 }
      } else {
        return { ...state, balance: action.balance }
      }
    case SET_SCORE:
      return { ...state, score: action.score }
    default:
      return state
  }
}

export default reducer
