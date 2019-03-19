import * as React from 'react';
import Helmet from 'react-helmet';

import { projectConstants } from '../projectConstants';

const meta = {
    "description": projectConstants.description,
    "og:title": projectConstants.title,
    "og:description": projectConstants.description,
    "og:image": projectConstants.og_imagePath
}

export const Head: React.FunctionComponent = () => {
    const { title } = projectConstants;
    return (
        <Helmet
            titleTemplate={`${title} | %s`}
            defaultTitle={title}
        >
            <html lang="en" />
            {Object.keys(meta).map(key =>
                <meta name={key} content={meta[key]} key={key}/>
            )}
        </Helmet>
    )
}

export default Head;