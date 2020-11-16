import React, { useContext, useEffect, useState } from 'react'
import Rings from '../Models/Rings'
import styled from 'styled-components'
import Elements from '../Models/Elements'
import Bars from '../Models/Bars'
import SlotMachineContext from '../Contexts/SlotMachineContext'
import Exceptions from '../Models/Exceptions'
import { CreateSetFixedElementAction } from '../Contexts/actions'
import { getNumberByElement } from '../Tools'
import Modes from '../Models/Modes'

interface Props {
  ring: Rings
}

const SelectFixedReelValue: React.FunctionComponent<Props> = ({ ring }) => {
  const { state, dispatch } = useContext(SlotMachineContext)
  const [element, setElement] = useState<Elements>(state.fixedReelsValue[ring])
  const [bar, setBar] = useState<Bars>(Bars.CENTER)
  useEffect(() => {
    dispatch(new CreateSetFixedElementAction(ring, getNumberByElement(element, bar)))
  }, [element, bar, dispatch, ring])

  const handleElementChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case Elements.THREE_BAR.toString():
        setElement(Elements.THREE_BAR)
        break
      case Elements.BAR.toString():
        setElement(Elements.BAR)
        break
      case Elements.TWO_BAR.toString():
        setElement(Elements.TWO_BAR)
        break
      case Elements.SEVEN.toString():
        setElement(Elements.SEVEN)
        break
      case Elements.CHERRY.toString():
        setElement(Elements.CHERRY)
        break
      default:
        throw Exceptions.ELEMENT_IS_NOT_VALID
    }
  }
  const handleBarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case Bars.TOP.toString():
        setBar(Bars.TOP)
        break
      case Bars.CENTER.toString():
        setBar(Bars.CENTER)
        break
      case Bars.BOTTOM.toString():
        setBar(Bars.BOTTOM)
        break
    }
  }

  if (state.mode === Modes.RANDOM) {
    return null
  }

  return (
    <Container>
      <select value={element} onChange={handleElementChange} onBlur={handleElementChange}>
        <option value={Elements.THREE_BAR.toString()}>3xBar</option>
        <option value={Elements.BAR.toString()}>Bar</option>
        <option value={Elements.TWO_BAR.toString()}>2xBar</option>
        <option value={Elements.SEVEN.toString()}>7</option>
        <option value={Elements.CHERRY.toString()}>Cherry</option>
      </select>
      <select value={bar} onChange={handleBarChange} onBlur={handleBarChange}>
        <option value={Bars.TOP.toString()}>Top</option>
        <option value={Bars.CENTER.toString()}>Center</option>
        <option value={Bars.BOTTOM.toString()}>Bottom</option>
      </select>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
`

export default SelectFixedReelValue
