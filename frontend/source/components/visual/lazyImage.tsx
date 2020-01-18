import * as React from 'react';
import supportsWebP from 'supports-webp';

import InViewport from './inViewport';

import './lazyImage.scss';

interface ILazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  rootMargin?: string;
  src: string;
  webpSrc?: string;
  placeholderSrc?: string;
  alt: string; //made alt required so i don't miss any off
}

export const LazyImage: React.FunctionComponent<ILazyImageProps> = props => {
  const { rootMargin, src, placeholderSrc, webpSrc, ...attrs } = props;

  return (
    <InViewport once={true} IOProps={{ rootMargin }}>
      {({ element, enteredViewport }) => (
        <img
          src={enteredViewport ? (supportsWebP && webpSrc) || src : placeholderSrc || ''}
          ref={element}
          data-entered-viewport={enteredViewport}
          {...attrs}
        />
      )}
    </InViewport>
  );
};

LazyImage.defaultProps = {
  rootMargin: '200px',
};

export default LazyImage;
