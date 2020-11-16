import Modes from './Modes'
import ReelsValue from './ReelsValue'
import Score from './Score'

export default interface SlotMachineState {
  balance?: number
  mode: Modes
  reelsValue: ReelsValue
  fixedReelsValue: ReelsValue
  score?: Score
}
