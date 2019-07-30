import * as React from 'react';
import './backToTop.scss';

interface IBackToTopProps {
}

export const BackToTop: React.FunctionComponent<IBackToTopProps> = (props: IBackToTopProps) => {
  return (
    <div className="back-to-top-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
      <div className='back-to-top' />
    </div>
  )
}
