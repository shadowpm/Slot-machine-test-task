import ReelsValue from '../Models/ReelsValue'
import { getElementByNumber } from './index'
import Bars from '../Models/Bars'
import Elements from '../Models/Elements'
import Rings from '../Models/Rings'
import Score from '../Models/Score'

interface Board {
  top: ReelsValue<Elements>
  center: ReelsValue<Elements>
  bottom: ReelsValue<Elements>
}

interface Winning {
  isWinning: boolean
  bar?: Bars
}

const calculateScore = (reelsValue: ReelsValue): Score | undefined => {
  const board: Board = {
    top: {
      ring1: getElementByNumber(reelsValue.ring1 - 1),
      ring2: getElementByNumber(reelsValue.ring2 - 1),
      ring3: getElementByNumber(reelsValue.ring3 - 1),
    },
    center: {
      ring1: getElementByNumber(reelsValue.ring1),
      ring2: getElementByNumber(reelsValue.ring2),
      ring3: getElementByNumber(reelsValue.ring3),
    },
    bottom: {
      ring1: getElementByNumber(reelsValue.ring1 + 1),
      ring2: getElementByNumber(reelsValue.ring2 + 1),
      ring3: getElementByNumber(reelsValue.ring3 + 1),
    },
  }

  return (
    winByThreeCherriesOnAnyLine(board) ||
    winByThreeSevensOnAnyLine(board) ||
    winByCombinationOfSevensAndCherriesOnAnyLine(board) ||
    winByThree3xBarsOnAnyLine(board) ||
    winByThree2xBarsOnAnyLine(board) ||
    winByThreeBarsOnAnyLine(board) ||
    winByCombinationOfAnyBarsOnAnyLine(board)
  )
}

const rings = [Rings.RING1, Rings.RING2, Rings.RING3]
const bars = [Bars.TOP, Bars.CENTER, Bars.BOTTOM]

const hasThreeElementSetOnLine = (board: Board, symbols: Elements[], bar: Bars) =>
  rings.reduce((value: boolean, ring): boolean => value && symbols.includes(board[bar][ring]), true)

const hasThreeSymbolsOnAnyLine = (board: Board, symbols: Elements[]): Winning =>
  bars.reduce<Winning>(
    (value: Winning, bar) => {
      if (value.isWinning) {
        return value
      }
      if (hasThreeElementSetOnLine(board, symbols, bar)) {
        return { isWinning: true, bar: bar }
      }
      return value
    },
    { isWinning: false }
  )

const returnScore = (winning: Winning, score: number): Score | undefined => {
  if (winning.isWinning) {
    return { score, bar: winning.bar }
  }
}

const winByThreeCherriesOnAnyLine = (board: Board): Score | undefined => {
  const result = hasThreeSymbolsOnAnyLine(board, [Elements.CHERRY])
  if (result.isWinning) {
    if (result.bar === Bars.TOP) {
      return { score: 2000, bar: result.bar }
    } else if (result.bar === Bars.CENTER) {
      return { score: 1000, bar: result.bar }
    } else if (result.bar === Bars.BOTTOM) {
      return { score: 4000, bar: result.bar }
    }
  }
}

const winByThreeSevensOnAnyLine = (board: Board): Score | undefined =>
  returnScore(hasThreeSymbolsOnAnyLine(board, [Elements.SEVEN]), 150)

const winByCombinationOfSevensAndCherriesOnAnyLine = (board: Board): Score | undefined =>
  returnScore(hasThreeSymbolsOnAnyLine(board, [Elements.SEVEN, Elements.CHERRY]), 75)

const winByThree3xBarsOnAnyLine = (board: Board): Score | undefined =>
  returnScore(hasThreeSymbolsOnAnyLine(board, [Elements.THREE_BAR]), 50)

const winByThree2xBarsOnAnyLine = (board: Board): Score | undefined =>
  returnScore(hasThreeSymbolsOnAnyLine(board, [Elements.TWO_BAR]), 20)

const winByThreeBarsOnAnyLine = (board: Board): Score | undefined =>
  returnScore(hasThreeSymbolsOnAnyLine(board, [Elements.BAR]), 10)

const winByCombinationOfAnyBarsOnAnyLine = (board: Board): Score | undefined =>
  returnScore(hasThreeSymbolsOnAnyLine(board, [Elements.THREE_BAR, Elements.TWO_BAR, Elements.BAR]), 5)

export default calculateScore
