import * as React from 'react'

import { Grid } from '../../grid';
import { SVG } from '../../svg';

interface IPathProps {
    points: Grid.IPoint[];
}

export const Path: React.FunctionComponent<IPathProps> =({ points }) => {
    return (
        <path
            d={SVG.pointsToPath(points)} 
            vectorEffect="non-scaling-stroke" 
        />
    )
}