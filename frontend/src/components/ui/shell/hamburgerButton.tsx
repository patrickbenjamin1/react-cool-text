import * as React from 'react'

import { ConnectWithOverlay } from '../overlay';

import './hamburgerButton.scss';

interface IHamburgerButtonProps {
  isOpen: boolean
  toggleOpen: () => any
}

const HamburgerButtonComponent: React.FunctionComponent<IHamburgerButtonProps> = props => {
  const { toggleOpen, isOpen } = props;

  return (
    <div className="hamburger-button-wrapper">
      <div className='hamburger-button' onClick={e => toggleOpen()} data-is-open={isOpen}>
        <div className='hamburger-button-inner' />
      </div>
    </div>
  )
}

export const HamburgerButton = ConnectWithOverlay('hamburger', HamburgerButtonComponent);