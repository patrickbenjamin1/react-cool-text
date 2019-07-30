import React from 'react'
import { DistanceFromCentre } from './distanceFromCentre';

interface IParallaxProps {
  parallaxAmount?: number
  children
}

export const Parallax: React.FunctionComponent<IParallaxProps> = (props) => {
  const { children, parallaxAmount } = props;
  return (
    <DistanceFromCentre>
      {({ distance, element }) =>
        <div ref={element} style={{ transform: `translateY(${distance * parallaxAmount}px)` }}>
          {children}
        </div>
      }
    </DistanceFromCentre>
  )
}

Parallax.defaultProps = {
  parallaxAmount: -0.4
}

export default Parallax