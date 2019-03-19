import * as React from 'react'

import Footer from './footer';
import Helmet from 'react-helmet';

interface IPageProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  showFooter?: boolean
  children: any,
  head?: {
    title?: string
    meta?: any
  }
}

const View: React.FunctionComponent<IPageProps> = (props) => {
  const { className, children, showFooter, head, ...attr } = props;
  const { title, meta } = !!head && head;
  return (
    <>
      {!!head &&
        <Helmet>
          {!!title &&
            <title>{title}</title>
          }
          {!!meta && Object.keys(meta).map(key =>
            <meta name={key} content={meta[key]} key={key} />
          )}
        </Helmet>
      }
      <div className={`page${className ? ` ${className}` : ''}`} {...attr}>
        {children}
      </div>
      {showFooter &&
        <Footer />
      }
    </>
  )
}

View.defaultProps = {
  showFooter: true
}

export default View