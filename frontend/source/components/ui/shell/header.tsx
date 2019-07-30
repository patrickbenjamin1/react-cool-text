import * as  React from 'react'

import { Link } from 'react-router-dom';

import './header.scss';
import { HamburgerButton } from './hamburgerButton';
import { BackToTop } from '../../navigation/backToTop';

interface IHeaderProps {
  className?: string;
  overlaysOpen?: boolean
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  const { overlaysOpen } = props;
  return (
    <header data-overlay-open={overlaysOpen}>
      <HamburgerButton />
      <Link to='/'>
        <p>LOGO</p>
      </Link>
      <BackToTop />
    </header>
  )
}

export default Header