import React from 'react'
import styled from 'styled-components'
import Elements from '../Models/Elements'
import three_bar from '../assets/3xBAR.png'
import bar from '../assets/BAR.png'
import two_bar from '../assets/2xBAR.png'
import cherry from '../assets/Cherry.png'
import seven from '../assets/7.png'

interface Props {
  value: Elements
  angle: number
  isWinning: boolean
}

const Element: React.FunctionComponent<Props> = ({ value, angle, isWinning }) => {
  const getElement = (): React.ReactNode => {
    switch (value) {
      case Elements.THREE_BAR:
        return <Picture src={three_bar} alt={'three bar'} />
      case Elements.BAR:
        return <Picture src={bar} alt={'bar'} />
      case Elements.TWO_BAR:
        return <Picture src={two_bar} alt={'two bar'} />
      case Elements.CHERRY:
        return <Picture src={cherry} alt={'cherry'} />
      case Elements.SEVEN:
        return <Picture src={seven} alt={'seven'} />
      default:
        return null
    }
  }

  return (
    <PictureContainer
      style={{ transform: `rotateX(${angle}deg) translateZ(150px)`, border: isWinning ? '2px solid red' : '' }}
    >
      {getElement()}
    </PictureContainer>
  )
}

const Picture = styled.img`
  width: 90px;
  height: 98px;
`
const PictureContainer = styled.div`
  position: absolute;
  width: 90px;
  height: 98px;
  box-sizing: border-box;
  opacity: 0.9;
  color: rgba(0, 0, 0, 0.9);
  background: #fff;
  border-right: solid 2px #fff;
  border-left: solid 2px #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export default Element
