import * as React from 'react';

import { connect } from 'react-redux';
import { IState } from '../../redux/core/store';
import { overlayActions } from '../../redux/ducks/ui/overlays';

import './overlay.scss';

interface IOverlayProps extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  scrollType?: 'inner' | 'outer'
  wrapperClassName?: string
  showCloseButton?: boolean
  name: string

  isOpen?: boolean
  close?: () => {}
}

const OverlayComponent: React.FunctionComponent<IOverlayProps> = (props) => {
  const { isOpen, close, scrollType, children, wrapperClassName, className, showCloseButton, ...attr } = props;

  let htmlElem = React.useRef(document.getElementsByTagName('html')[0]);

  React.useEffect(() => {
    if (!!htmlElem) {
      if (!isOpen) {
        htmlElem.current.style.overflowY = 'auto';
      }
      else {
        htmlElem.current.style.overflowY = 'hidden';
      }
    }
  }, [isOpen])

  return (
    <div className={`overlay-background${wrapperClassName ? ` ${wrapperClassName}` : ''}`} onClick={close} data-is-open={isOpen} data-scroll-type={scrollType}>
      <div className={`overlay${className ? ` ${className}` : ''}`} data-opened={isOpen} onClick={e => e.stopPropagation()} {...attr}>
        {showCloseButton &&
          <div className="close-overlay" onClick={close}>
            <img src={require('../../assets/ui/cross.svg')} />
          </div>
        }
        <div className='overlay-inner'>
          {children}
        </div>
      </div >
    </div>
  )
}

OverlayComponent.defaultProps = {
  scrollType: 'outer',
  showCloseButton: true
}

export const Overlay = connect(
  (state: IState, ownProps: IOverlayProps) => {
    return {
      isOpen: !!state.overlays[ownProps.name]
    }
  },
  (dispatch, ownProps: IOverlayProps) => {
    return {
      close: () => dispatch(overlayActions.toggle(ownProps.name, false))
    }
  }
)(OverlayComponent);

export default Overlay;


/**
 * Connect a component with the redux props needed to interact with a specified overlay.
 * @param name The name of the overlay to exist in redux state, can be anything as long as it's unique
 * @param component The component to connect
 */

export const ConnectWithOverlay = (name: string, component: React.ComponentType) => connect(
  (state: IState) => {
    return {
      isOpen: !!state.overlays[name]
    }
  },
  dispatch => {
    return {
      toggleOpen: () => dispatch(overlayActions.toggle(name))
    }
  }
)(component)