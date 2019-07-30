import * as React from 'react'

import './footer.scss';

interface IFooterProps extends React.HTMLProps<HTMLDivElement> {
}

const Footer: React.FunctionComponent<IFooterProps> = props => {
  return (
    <div className='footer' {...props}>
      <p>Footer</p>
    </div>
  )
}

export default Footer;