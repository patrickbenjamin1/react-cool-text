import * as React from 'react';
import { Grid } from '../../grid';
import { Path } from './path';



export const RandomPath: React.FunctionComponent = () => {
  const points = React.useMemo(() => {
    return Grid.allPoints.sort(() => Math.floor(Math.random() * 2) - 1);
  }, [])

  return <Path points={points} />;
};
