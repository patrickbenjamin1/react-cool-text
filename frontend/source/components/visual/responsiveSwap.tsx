import * as React from 'react'
import './responsiveSwap.scss';

interface IResponsiveSwapProps {
  desktopRender: JSX.Element;
  mobileRender: JSX.Element;
}

export const ResponsiveSwap: React.FunctionComponent<IResponsiveSwapProps> = (props) => {
  const { desktopRender, mobileRender } = props;
  return (
    <span className='responsive-swap'>
      <span className='responsive-swap-desktop'>
        {desktopRender}
      </span>
      <span className='responsive-swap-mobile'>
        {mobileRender}
      </span>
    </span>
  )
}

export default ResponsiveSwap;