import * as React from 'react'

interface IGetIntersectionChildrenArgs {
  element: React.MutableRefObject<any>
  enteredViewport?: boolean
  intersectionRatio?: number
}

interface IGetIntersectionProps {
  IOProps: IntersectionObserverInit
  numberOfIncrements?: number;
  children: (props: IGetIntersectionChildrenArgs) => any
}

export const GetIntersection: React.FunctionComponent<IGetIntersectionProps> = (props: IGetIntersectionProps) => {
  const { IOProps, children, numberOfIncrements } = props;

  const [enteredViewport, setEnteredViewport] = React.useState(false);
  const [intersectionRatio, setIntersectionRatio] = React.useState(0);

  let element = React.useRef(null);

  let observer: IntersectionObserver;

  React.useEffect(() => {
    let increments: number[] = [];
    for (let i = 0; i < 1; i += 1 / numberOfIncrements) {
      increments.push(i);
    }
    observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          setEnteredViewport(true)
          setIntersectionRatio(entry.intersectionRatio);
        }
        else {
          setEnteredViewport(false)
          setIntersectionRatio(0);
        }
      },
      {
        ...IOProps,
        threshold: increments,
      }
    );
    observer.observe(element.current);
    return (() => {
      observer.unobserve(element.current);
    })
  }, [element])

  return children({ element, enteredViewport, intersectionRatio });
}

GetIntersection.defaultProps = {
  IOProps: {
    rootMargin: '-50px'
  },
  numberOfIncrements: 10
}

export default GetIntersection;
