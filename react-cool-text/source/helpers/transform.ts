import { Vector } from '../types';

export namespace TransformHelpers {
    export const getTransform = (rotate: number = 0, scale: number = 1, translate: Vector = { x: 0, y: 0, z: 0 }) => {
        // console.log(scale)
        return [
            ...(typeof translate === 'object' ? [`translate3d(${translate.x}px, ${translate.y}px, ${translate.z || 0}px)`] : []),
            ...(typeof rotate === 'number' ? [`rotate(${rotate}deg)`] : []),
            ...(typeof scale === 'number' ? [`scale(${scale})`] : []),
        ].join(' ');
    };
}
