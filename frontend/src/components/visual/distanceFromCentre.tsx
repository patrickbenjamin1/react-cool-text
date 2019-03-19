import React from 'react'
import { onScrollService } from '../../services/eventsService';
import { getFullOffset } from '../../helpers/offset';

interface IDistanceFromCentreArgs {
  element: React.MutableRefObject<any>
  distance: number
}

interface IDistanceFromCentreProps {
  children: (args: IDistanceFromCentreArgs) => any;
  parallaxAmount?: number;
  scale?: number;
}

export const DistanceFromCentre: React.FunctionComponent<IDistanceFromCentreProps> = (props) => {
  const { children } = props;

  const [distance, setDistance] = React.useState(0);

  let element = React.useRef(null);

  const onScroll = () => {
    if (!!element && !!element.current) {
      setDistance(((getFullOffset(element.current) + element.current.offsetHeight * 0.5) - (window.scrollY + window.outerHeight * 0.5)));
    }
  }

  React.useEffect(() => {
    onScrollService.add(onScroll);
    return (() => {
      onScrollService.stop(onScroll);
    })
  }, [])

  return children({ distance, element })
}