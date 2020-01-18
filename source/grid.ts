// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Grid {
    export const svgSize = 100;

    export interface IPoint {
        x: number;
        y: number;
    }

    export const pointDistance = 10;

    export const xPoints = 3;
    export const yPoints = 400;

    export const allPoints = new Array(xPoints * yPoints).fill(undefined).map<IPoint>((_, i) => {
        const x = (i % xPoints) * (svgSize / (xPoints - 1));
        const y = Math.floor(i / xPoints) * (svgSize / (yPoints - 1));

        return { x, y };
    });
}