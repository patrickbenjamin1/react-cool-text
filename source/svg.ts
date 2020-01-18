import { Grid } from './grid';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SVG {
    export const pointsToPath = (points: Grid.IPoint[]): string =>
        `M${points.map(point => `${point.x} ${point.y}`).join(' L ')}`;
}