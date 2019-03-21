import * as React from 'react'

import Header from './header';
import Head from '../../head';
import OverlayLayer from './overlayLayer';

import './shell.scss';

interface IProps {
  children: any
}

const Shell: React.FunctionComponent<IProps> = props => {
  const { children } = props;

  const [isAtTop, setIsAtTop] = React.useState<boolean>(true);

  const onscroll = () => {
    const scroll = window.scrollY;
    if (scroll <= 50) {
      setIsAtTop(true);
    }
    else {
      setIsAtTop(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onscroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onscroll);
    }
  }, [])

  return <>
    <Head />
    <Header />
    <main>
      {children}
    </main>
    <OverlayLayer />
  </>
}

export default Shell;