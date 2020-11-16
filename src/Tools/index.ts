import Elements from '../Models/Elements'
import ReelsValue from '../Models/ReelsValue'
import Bars from '../Models/Bars'
import Exceptions from '../Models/Exceptions'
import Rings from '../Models/Rings'
export { default as calculateScore } from './calculateScore'

const elements = [Elements.THREE_BAR, Elements.BAR, Elements.TWO_BAR, Elements.SEVEN, Elements.CHERRY]

export const getElementByNumber = (n: number): Elements => {
  if (n % 2 === 1) {
    return Elements.NEUTRAL
  }

  return elements[(n / 2) % 5]
}

export const getNumberByElement = (element: Elements, bar: Bars): number => {
  if (element === Elements.NEUTRAL) {
    throw Exceptions.ELEMENT_IS_NOT_VALID
  }

  const index = elements.findIndex(e => e === element) * 2
  switch (bar) {
    case Bars.CENTER:
      return index
    case Bars.TOP:
      return index + 1
    case Bars.BOTTOM:
      return (index - 1) % 10
  }
}

export const getDelay = (ring: Rings): number => {
  if (ring === Rings.RING1) {
    return 0
  } else if (ring === Rings.RING2) {
    return 0.5
  } else {
    return 1
  }
}

export const getRandomElementNumber = (): number => Math.floor(Math.random() * 10)

export const generateReelsRandomValue = (): ReelsValue => ({
  ring1: getRandomElementNumber(),
  ring2: getRandomElementNumber(),
  ring3: getRandomElementNumber(),
})
