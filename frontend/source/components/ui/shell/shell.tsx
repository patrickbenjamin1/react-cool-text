import * as React from 'react'

import Header from './header';
import Head from '../../head';
import OverlayLayer from './overlayLayer';

import './shell.scss';
import { connect } from 'react-redux';
import { IState } from '../../../redux/core/store';
import { IOverlayState } from '../../../redux/ducks/ui/overlays';

interface IProps {
  children: any
  overlays: IOverlayState
}

const ShellComponent: React.FunctionComponent<IProps> = props => {
  const { children, overlays } = props;

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

  const overlaysOpen = Object.keys(overlays).some(key => !!overlays[key]);

  return <>
    <Head />
    <div className="content" data-overlay-open={overlaysOpen}>
      <Header />
      <main>
        {children}
      </main>
    </div>
    <OverlayLayer />
  </>
}

const Shell = connect(
  (state: IState) => ({
    overlays: state.overlays
  })
  ,
  dispatch => ({})
)(ShellComponent)

export default Shell;