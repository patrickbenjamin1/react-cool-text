/**
 * Get offset from the root element of the page.
 * 
 * @param element The element to get the offset of
 * @param direction Top or Left, the direction from which to calculate the offset from
 */

export const getFullOffset = (element: HTMLElement, direction: 'Top' | 'Left' = 'Top') => {
  let elementToLoop = element;
  let totalOffset = 0;
  while (elementToLoop && elementToLoop !== undefined) {
    totalOffset += elementToLoop[`offset${direction}`];
    elementToLoop = <HTMLElement>elementToLoop.offsetParent;
  }
  return totalOffset;
}