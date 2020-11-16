import Action from '../Models/Action'
import ReelsValue from '../Models/ReelsValue'
import { generateReelsRandomValue } from '../Tools'
import Rings from '../Models/Rings'
import Score from '../Models/Score'

// Actions
export const TOGGLE_MODE = 'Toggle mode'
export const SPIN = 'Spin'
export const SET_FIXED_ELEMENT = 'Set fixed element'
export const SET_BALANCE = 'Set balance'
export const SET_SCORE = 'Set score'

// Action creators
export class CreateToggleModeAction implements Action {
  readonly type = TOGGLE_MODE
}
export class CreateSpinAction implements Action {
  readonly type = SPIN
  constructor(public reelsValue: ReelsValue = generateReelsRandomValue()) {}
}
export class CreateSetFixedElementAction implements Action {
  readonly type = SET_FIXED_ELEMENT
  constructor(public ring: Rings, public value: number) {}
}
export class CreateSetBalanceAction implements Action {
  readonly type = SET_BALANCE
  constructor(public balance: number | undefined) {}
}
export class CreateSetScoreAction implements Action {
  readonly type = SET_SCORE
  constructor(public score: Score | undefined) {}
}

// Actions type
export type Actions =
  | CreateToggleModeAction
  | CreateSpinAction
  | CreateSetFixedElementAction
  | CreateSetBalanceAction
  | CreateSetScoreAction
