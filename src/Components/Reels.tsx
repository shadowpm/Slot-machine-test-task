import React from 'react'
import Ring from './Ring'
import styled from 'styled-components'
import Rings from '../Models/Rings'

const Reels: React.FunctionComponent = () => {
  return (
    <Container>
      <div className="reels">
        <Ring ring={Rings.RING1} />
        <Ring ring={Rings.RING2} />
        <Ring ring={Rings.RING3} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  text-align: center;
  .reels {
    display: flex;
    width: fit-content;
    margin: auto;
  }
  .spin-button {
    background-color: red;
  }
`

export default Reels
