import * as React from 'react';

import Overlay from '../overlay';

import './hamburgerMenu.scss';

interface IHamburgerMenuProps {
}

export const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = props => {
  return (
    <Overlay className='hamburger-menu' wrapperClassName='hamburger-menu-wrapper' name='hamburger' scrollType='inner' showCloseButton={false}>
      <p>I am the hamburger</p>
    </Overlay>
  )
}