import * as React from 'react'

import GetIntersection from './getIntersection';

interface IFadeDuringEntryProps {
  once?: boolean
  children?: any
  className: string
  numberOfIncrements?: number;
  IOProps: IntersectionObserverInit
}

export const FadeDuringEntry: React.FunctionComponent<IFadeDuringEntryProps> = (props: IFadeDuringEntryProps) => {
  const { children, className, ...getIntersectionProps } = props;

  return (
    <GetIntersection {...getIntersectionProps}>
      {({ element, intersectionRatio }) => (
        <div ref={element} className={className} style={{ opacity: intersectionRatio }}>{children}</div>
      )}
    </GetIntersection>
  )
}

FadeDuringEntry.defaultProps = {
  IOProps: {
    rootMargin: '-50px',
  },
  once: false,
}

export default FadeDuringEntry;
