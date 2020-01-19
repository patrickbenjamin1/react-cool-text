export namespace TransformHelpers {
    export const getTransform = (rotate: number, scale: number, translate: Vector) => 
        [
            ...(rotate ? [`rotate(${rotate}deg)`] : []), 
            ...(scale ? [`scale(${scale})`] : []), 
            ...(translate ? [`translate3d(${translate.x}px, ${translate.y}px, ${translate.z || 0}px)`] : [])
        ].join(' ')
}