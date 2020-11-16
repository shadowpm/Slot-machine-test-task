import React, { useContext, useEffect, useState } from 'react'
import Element from './Element'
import styled from 'styled-components'
import { getDelay, getElementByNumber } from '../Tools'
import Rings from '../Models/Rings'
import SlotMachineContext from '../Contexts/SlotMachineContext'
import SelectFixedReelValue from './SelectFixedReelValue'
import Score from '../Models/Score'
import Bars from '../Models/Bars'

interface Props {
  ring: Rings
}

const getWinningLane = (score: Score | undefined, ringElementNumber: number): number | undefined => {
  if (score?.bar) {
    switch (score.bar) {
      case Bars.TOP:
        return (ringElementNumber - 1) % 10
      case Bars.CENTER:
        return ringElementNumber % 10
      case Bars.BOTTOM:
        return (ringElementNumber + 1) % 10
    }
  }
}
const Ring: React.FunctionComponent<Props> = ({ ring }) => {
  const { state } = useContext(SlotMachineContext)
  const winningLane = getWinningLane(state.score, state.reelsValue[ring])

  const value = state.reelsValue[ring]
  const [animation, setAnimation] = useState<undefined | string>()
  const elements = []
  for (let i = 0; i < 10; i++) {
    elements.push(
      <Element value={getElementByNumber(i)} angle={i * 36} key={i.toString()} isWinning={i === winningLane} />
    )
  }

  useEffect(() => {
    setAnimation(
      `1s ease 0s 1 normal none running back-spin, ${2.5 + getDelay(ring)}s ease 0s 1 normal none running spin-${value}`
    )
  }, [ring, value])
  return (
    <Container>
      <Rotate>
        <StyledRing
          style={{
            transform: `rotateX(${-3600 - value * 36}deg)`,
            animation,
          }}
        >
          {elements}
        </StyledRing>
      </Rotate>
      <SelectFixedReelValue ring={ring} />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 0 40px;
  perspective: 1000px;
`

const Rotate = styled.div`
  margin: 0 auto 0;
  width: 150px;
  height: 220px;
  padding-top: 200px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`

const StyledRing = styled.div`
  margin: 0 auto;
  height: 98px;
  width: 90px;
  transform-style: preserve-3d;

  /*=====*/
  @keyframes back-spin {
    /*0%    { transform: rotateX(0deg); }*/
    100% {
      transform: rotateX(36deg);
    }
  }
  // @keyframes tiltin {
  //   0% {
  //     transform: rotateY(0deg);
  //   }
  //   50% {
  //     transform: rotateY(0deg);
  //   }
  //   100% {
  //     transform: rotateY(45deg);
  //   }
  // }
  // @keyframes tiltout {
  //   0% {
  //     transform: rotateY(45deg);
  //   }
  //   100% {
  //     transform: rotateY(0deg);
  //   }
  // }

  @keyframes spin-0 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3600deg);
    }
  }
  @keyframes spin-1 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3636deg);
    }
  }
  @keyframes spin-2 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3672deg);
    }
  }
  @keyframes spin-3 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3708deg);
    }
  }
  @keyframes spin-4 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3744deg);
    }
  }
  @keyframes spin-5 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3780deg);
    }
  }
  @keyframes spin-6 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3816deg);
    }
  }
  @keyframes spin-7 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3852deg);
    }
  }
  @keyframes spin-8 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3888deg);
    }
  }
  @keyframes spin-9 {
    0% {
      transform: rotateX(36deg);
    }
    100% {
      transform: rotateX(-3924deg);
    }
  }
`

export default Ring
