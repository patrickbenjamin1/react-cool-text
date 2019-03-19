import * as  React from 'react'

import { Link } from 'react-router-dom';

import './header.scss';
import { HamburgerButton } from './hamburgerButton';
import { BackToTop } from '../../navigation/backToTop';

interface IHeaderProps {
  className?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <header>
      <HamburgerButton />
      <Link to='/'>
        <p>LOGO</p>
      </Link>
      <BackToTop />
    </header>
  )
}

export default Header